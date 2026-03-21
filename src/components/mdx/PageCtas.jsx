import React from "react";
import Button from "./Button.jsx";

export default function PageCtas({ compare, compareLabel, slug }) {
  const backTarget = slug?.endsWith("-vergleichen")
    ? `/${slug.split("-vergleichen")[0]}/`
    : null;

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
