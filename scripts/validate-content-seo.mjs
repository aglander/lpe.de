import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const collections = [
  {
    name: "page",
    dir: path.join(root, "src/content/page"),
    required: ["slug", "heroTitle"],
    recommended: ["seoTitle", "seoDescription", "heroDescription"],
  },
  {
    name: "seo",
    dir: path.join(root, "src/content/seo"),
    required: ["slug", "seoTitle", "seoDescription", "heroTitle", "heroDescription"],
    recommended: [],
  },
];

const GENERIC_SITE_TITLE = "lars-peter eckhardt | lpe versicherungsmakler & finanzmakler";
const options = {
  strictWarnings: process.argv.includes("--strict-warnings"),
};

const readFiles = (dir) =>
  fs.readdirSync(dir).filter((name) => name.endsWith(".mdx")).sort();

const parseFrontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter = {};
  for (const line of match[1].split("\n")) {
    const fieldMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!fieldMatch) continue;
    const [, key, rawValue] = fieldMatch;
    frontmatter[key] = rawValue.trim().replace(/^['"]|['"]$/g, "");
  }

  return frontmatter;
};

const normalizeText = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/<place(?:\s+long)?\s*\/>/g, "place")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const formatIssue = ({ level, collection, file, message }) =>
  `${level.toUpperCase()}: [${collection}] ${file} - ${message}`;

const issues = [];

for (const collection of collections) {
  for (const file of readFiles(collection.dir)) {
    const filePath = path.join(collection.dir, file);
    const frontmatter = parseFrontmatter(fs.readFileSync(filePath, "utf8"));

    for (const field of collection.required) {
      if (!frontmatter[field]) {
        issues.push({
          level: "error",
          collection: collection.name,
          file,
          message: `Pflichtfeld \`${field}\` fehlt.`,
        });
      }
    }

    for (const field of collection.recommended) {
      if (!frontmatter[field]) {
        issues.push({
          level: "warning",
          collection: collection.name,
          file,
          message: `Empfohlenes SEO-Feld \`${field}\` fehlt.`,
        });
      }
    }

    const seoTitle = frontmatter.seoTitle || "";
    const seoDescription = frontmatter.seoDescription || "";
    const heroTitle = frontmatter.heroTitle || "";
    const heroDescription = frontmatter.heroDescription || "";

    if (seoTitle && seoTitle.length < 15) {
      issues.push({
        level: "warning",
        collection: collection.name,
        file,
        message: `\`seoTitle\` ist sehr kurz (${seoTitle.length} Zeichen).`,
      });
    }

    if (seoDescription && seoDescription.length < 50) {
      issues.push({
        level: "warning",
        collection: collection.name,
        file,
        message: `\`seoDescription\` ist sehr kurz (${seoDescription.length} Zeichen).`,
      });
    }

    if (seoDescription && seoDescription.length > 180) {
      issues.push({
        level: "warning",
        collection: collection.name,
        file,
        message: `\`seoDescription\` ist sehr lang (${seoDescription.length} Zeichen).`,
      });
    }

    if (seoTitle && normalizeText(seoTitle) === GENERIC_SITE_TITLE) {
      issues.push({
        level: "warning",
        collection: collection.name,
        file,
        message: "`seoTitle` wirkt wie ein generischer Site-Fallback.",
      });
    }

    if (
      seoTitle &&
      heroTitle &&
      normalizeText(seoTitle) === normalizeText(heroTitle) &&
      seoTitle.length < 30
    ) {
      issues.push({
        level: "warning",
        collection: collection.name,
        file,
        message: "`seoTitle` entspricht nahezu der Hero-Ueberschrift und wirkt wenig suchspezifisch.",
      });
    }

    if (
      seoDescription &&
      heroDescription &&
      normalizeText(seoDescription) === normalizeText(heroDescription)
    ) {
      issues.push({
        level: "warning",
        collection: collection.name,
        file,
        message: "`seoDescription` ist identisch zur Hero-Beschreibung.",
      });
    }
  }
}

const errors = issues.filter((issue) => issue.level === "error");
const warnings = issues.filter((issue) => issue.level === "warning");

if (issues.length === 0) {
  console.log("SEO-Validierung erfolgreich: keine Probleme gefunden.");
  process.exit(0);
}

console.log("SEO-Validierung:");
for (const issue of issues) {
  console.log(`- ${formatIssue(issue)}`);
}

console.log(
  `\nZusammenfassung: ${errors.length} Fehler, ${warnings.length} Warnungen in ${collections.length} Collections.`,
);

if (errors.length > 0 || (options.strictWarnings && warnings.length > 0)) {
  process.exit(1);
}
