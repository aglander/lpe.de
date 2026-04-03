import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const staticDir = path.join(root, "static");

const normalizeSlug = (value = "") =>
  String(value)
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\/+/g, "/");

const requireDist = (target) => {
  if (!fs.existsSync(target)) {
    throw new Error("dist/ wurde nicht gefunden. Bitte zuerst `npm run build` ausfuehren.");
  }
};

const slugsFromDir = (dir) =>
  fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => {
      const filePath = path.join(dir, name);
      const source = fs.readFileSync(filePath, "utf8");
      const slugMatch = source.match(/^slug:\s*(.+)$/m);
      return slugMatch ? slugMatch[1].trim() : name.replace(/\.mdx$/, "");
    });

const pages = slugsFromDir(path.join(root, "src/content/page"));
const legal = slugsFromDir(path.join(root, "src/content/legal"));
const seo = slugsFromDir(path.join(root, "src/content/seo"));
const places = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/places.json"), "utf8"),
);

const expectedPaths = new Set([
  "/",
  "/kontakt/",
  "/ortsverzeichnis/",
  "/404.html",
  ...pages.map((slug) => `/${slug}/`),
  ...legal.map((slug) => `/${slug}/`),
  ...seo.flatMap((slug) =>
    places.map((place) => `/${slug}-${normalizeSlug(place.slug)}/`),
  ),
]);

requireDist(dist);

const missing = [...expectedPaths].filter((route) => {
  const routePath =
    route === "/"
      ? path.join(dist, "index.html")
      : route.endsWith(".html")
        ? path.join(dist, route)
        : path.join(dist, route, "index.html");
  return !fs.existsSync(routePath);
});

if (missing.length > 0) {
  console.error("Fehlende HTML-Dateien:");
  for (const route of missing) console.error(`- ${route}`);
  process.exit(1);
}

const htmlFiles = [];
const collectHtmlFiles = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(entryPath);
    } else if (entry.name.endsWith(".html")) {
      htmlFiles.push(entryPath);
    }
  }
};

collectHtmlFiles(dist);

const brokenLinks = [];

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, "utf8");

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const rawTarget = match[1];
    if (!rawTarget.startsWith("/")) continue;
    if (rawTarget.startsWith("//")) continue;

    const sanitizedTarget = rawTarget
      .replaceAll("&amp;", "&")
      .split("#")[0]
      .split("?")[0];
    const decodedTarget = decodeURIComponent(sanitizedTarget);

    if (/\.(png|jpg|jpeg|svg|webp|pdf|xml|txt|html|webmanifest)$/i.test(decodedTarget)) {
      const distTarget = path.join(dist, decodedTarget);
      const staticTarget = path.join(staticDir, decodedTarget);

      if (!fs.existsSync(distTarget) && !fs.existsSync(staticTarget)) {
        brokenLinks.push({
          file: path.relative(root, filePath),
          target: rawTarget,
        });
      }

      continue;
    }

    if (decodedTarget.startsWith("/_astro/")) {
      if (!fs.existsSync(path.join(dist, decodedTarget))) {
        brokenLinks.push({
          file: path.relative(root, filePath),
          target: rawTarget,
        });
      }

      continue;
    }

    const routePath =
      decodedTarget === "/"
        ? path.join(dist, "index.html")
        : path.join(dist, decodedTarget, "index.html");

    if (!fs.existsSync(routePath)) {
      brokenLinks.push({
        file: path.relative(root, filePath),
        target: rawTarget,
      });
    }
  }
}

if (brokenLinks.length > 0) {
  console.error("Fehlerhafte interne Links oder Assets:");
  for (const { file, target } of brokenLinks) {
    console.error(`- ${file} -> ${target}`);
  }
  process.exit(1);
}

console.log(
  `URL-Audit erfolgreich: ${expectedPaths.size} Routen und ${htmlFiles.length} HTML-Dateien geprüft.`,
);
