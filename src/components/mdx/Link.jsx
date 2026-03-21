import React from "react";

export default function Link({ to, href, children, ...props }) {
  const target = to || href || "#";
  const finalHref =
    target.startsWith("http") || target.startsWith("#") || target.endsWith("/")
      ? target
      : `${target}/`;

  return (
    <a href={finalHref} {...props}>
      {children}
    </a>
  );
}
