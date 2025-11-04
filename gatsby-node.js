// gatsby-node.js
const path = require("path");
const places = require("./src/data/places.json");

// kleine Helfer:
const trimSlashes = (s) => String(s || "").replace(/^\/+|\/+$/g, "");
const norm = (s) =>
  trimSlashes(s)
    .toLowerCase()
    .replace(/\s+/g, "-")    // Leerzeichen → -
    .replace(/\/+/g, "/");   // mehrere / → ein /

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        edges {
          node { slug }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    return;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const parts = String(node.slug).split("/");
    const section = parts[0];          // "page" | "legal" | "seo"
    const base = norm(parts[1] || ""); // z.B. "impressum" | "versicherungsmakler"

    // Normale Seiten (Leistungen etc.)
    if (section === "page") {
      createPage({
        path: `/${base}/`,                         // immer mit Slash
        component: path.resolve("./src/templates/page.js"),
        context: {
          slug: node.slug,
          pageType: "service",
        },
      });
    }

    // Rechtliches
    if (section === "legal") {
      createPage({
        path: `/${base}/`,
        component: path.resolve("./src/templates/legal.js"),
        context: {
          slug: node.slug,
          pageType: "legal",
        },
      });
    }

    // SEO-Pages (Ortsseiten: Versicherungsmakler & Baufinanzierung)
    if (section === "seo") {
      const baseType = base; // "versicherungsmakler" oder "baufinanzierung"

      places.forEach((p, i) => {
        // Originaldaten + normalisierter Slug
        const placeSlug = norm(p.slug);
        const placeData = {
          ...p,
          slug: placeSlug,                 // überschreibe mit normalisierter Variante
          zipcode: p.zipcode ?? null,
          short: p.short ?? "",
          long: p.long ?? p.title ?? "",
          title: p.title ?? p.long ?? p.short ?? placeSlug
        };

        const fullPath = `/${baseType}-${placeSlug}/`;

        createPage({
          path: fullPath,
          component: path.resolve("./src/templates/seo-page.js"),
          context: {
            slug: node.slug,
            place: placeSlug,
            placeData,                     // <<<<<<  direkt mitgeben
            pageType:
              baseType === "baufinanzierung"
                ? "location-mortgage"
                : "location-insurance",
            // indexable: true/false – kannst du später nutzen
          },
        });
      });
    }
  });
};
