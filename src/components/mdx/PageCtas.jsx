import React from "react";
import Button from "./Button.jsx";
import { getBackTarget } from "../../lib/mdx-links.js";

// React bridge variant used when CTAs are injected into MDX as React elements.
export default function PageCtas({ compare, compareLabel, slug, backUrl }) {
  const backTarget = getBackTarget(slug, backUrl);

  return (
    <div className="flex flex-wrap gap-3">
      {compare ? (
        <Button outline url={compare}>
          {compareLabel || "Selber vergleichen"}
        </Button>
      ) : null}
      {backTarget ? (
        <Button outline url={backTarget}>
          &larr; zurueck
        </Button>
      ) : null}
      <Button url="/kontakt/">Kontakt aufnehmen</Button>
    </div>
  );
}
