import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

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
    places.map((place) => `/${slug}-${String(place.slug).toLowerCase()}/`),
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

console.log(`URL-Audit erfolgreich: ${expectedPaths.size} Routen gefunden.`);
