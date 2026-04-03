import React from "react";

export default function SectionHeader({ preTitle, title, description }) {
  return (
    <div className="mb-2 text-center [hyphens:auto]">
      {preTitle}
      {title ? (
        <h2 className="py-2 text-2xl font-bold text-grey lg:text-4xl">{title}</h2>
      ) : null}
      {description ? <p className="text-lg text-textlight">{description}</p> : null}
    </div>
  );
}
