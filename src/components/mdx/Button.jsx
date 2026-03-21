import React from "react";

export default function Button({ url, children, outline = false, onClick, className = "" }) {
  const classes = `${outline ? "btn-outline" : "btn-primary"} ${className}`.trim();

  if (url) {
    const external = url.startsWith("http");
    return (
      <a
        href={url.endsWith("/") || external ? url : `${url}/`}
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
