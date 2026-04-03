import React from "react";
import { isExternalHref, normalizeMdxHref } from "../../lib/mdx-links.js";

// React bridge variant kept for MDX wrappers that still render CTA elements via React.
export default function Button({ url, children, outline = false, onClick, className = "" }) {
  const classes = `${outline ? "btn-outline" : "btn-primary"} ${className}`.trim();

  if (url) {
    const external = isExternalHref(url);
    return (
      <a
        href={normalizeMdxHref(url)}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
