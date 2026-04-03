import React from "react";

const icons = {
  "check-circle": {
    viewBox: "0 0 24 24",
    paths: ["M9 12.75 11.25 15 15.75 9.75", "M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"],
  },
  laptop: {
    viewBox: "0 0 24 24",
    paths: ["M3.75 5.25h16.5v10.5H3.75z", "M2.25 18.75h19.5", "M9 21.75h6"],
  },
  "piggy-bank": {
    viewBox: "0 0 24 24",
    paths: [
      "M8.25 7.5h3",
      "M12 6.75v1.5",
      "M19.5 10.5a2.25 2.25 0 1 0 0-4.5",
      "M6.75 9A5.25 5.25 0 0 0 6 19.44V21h2.25v-1.02c.48.12.99.18 1.5.18h4.5A5.25 5.25 0 0 0 19.5 15c0-.78-.18-1.5-.48-2.16l1.23-1.23-1.5-1.5-1.02 1.02A5.23 5.23 0 0 0 14.25 9h-1.5l-.9-1.8A1.5 1.5 0 0 0 10.5 6h-1.05A2.7 2.7 0 0 0 6.75 8.7V9Z",
      "M16.5 12.75h.008v.008H16.5z",
    ],
  },
  "file-contract": {
    viewBox: "0 0 24 24",
    paths: [
      "M14.25 3.75H6.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V8.25L14.25 3.75Z",
      "M14.25 3.75v4.5h4.5",
      "M8.25 12h7.5",
      "M8.25 15h7.5",
    ],
  },
  "euro-sign": {
    viewBox: "0 0 24 24",
    paths: ["M14.25 6a5.25 5.25 0 1 0 0 12", "M6.75 10.5h6.75", "M6.75 13.5h6.75"],
  },
  heart: {
    viewBox: "0 0 24 24",
    paths: ["M12 21s-7.5-4.35-7.5-10.2A4.8 4.8 0 0 1 9.3 6a5.09 5.09 0 0 1 2.7.84A5.09 5.09 0 0 1 14.7 6a4.8 4.8 0 0 1 4.8 4.8C19.5 16.65 12 21 12 21Z"],
  },
  "angle-right": {
    viewBox: "0 0 24 24",
    paths: ["m9 6 6 6-6 6"],
  },
  "quote-right": {
    viewBox: "0 0 24 24",
    paths: [
      "M9.75 17.25H4.5v-5.1A4.65 4.65 0 0 1 9.15 7.5h.6v2.25h-.6a2.4 2.4 0 0 0-2.4 2.4v.6h3ZM19.5 17.25h-5.25v-5.1A4.65 4.65 0 0 1 18.9 7.5h.6v2.25h-.6a2.4 2.4 0 0 0-2.4 2.4v.6h3Z",
    ],
  },
  star: {
    viewBox: "0 0 24 24",
    paths: ["m12 3.75 2.55 5.16 5.7.84-4.13 4.02.97 5.68L12 16.77l-5.1 2.68.97-5.68L3.75 9.75l5.7-.84L12 3.75Z"],
    fill: true,
  },
  facebook: {
    viewBox: "0 0 24 24",
    paths: ["M13.5 21v-7.5h2.55l.45-3h-3V8.55c0-.84.27-1.41 1.47-1.41h1.68V4.5c-.3-.03-1.29-.12-2.43-.12-2.4 0-4.05 1.47-4.05 4.17v1.95H7.5v3h2.67V21Z"],
    fill: true,
  },
  youtube: {
    viewBox: "0 0 24 24",
    paths: [
      "M21 8.1a2.7 2.7 0 0 0-1.89-1.91C17.43 5.7 12 5.7 12 5.7s-5.43 0-7.11.49A2.7 2.7 0 0 0 3 8.1 28.66 28.66 0 0 0 2.55 12c0 1.32.15 2.62.45 3.9a2.7 2.7 0 0 0 1.89 1.91c1.68.49 7.11.49 7.11.49s5.43 0 7.11-.49A2.7 2.7 0 0 0 21 15.9c.3-1.28.45-2.58.45-3.9s-.15-2.62-.45-3.9Z",
      "m10.25 14.85 4.5-2.85-4.5-2.85v5.7Z",
    ],
    fill: true,
  },
  linkedin: {
    viewBox: "0 0 24 24",
    paths: [
      "M6.75 8.25A1.5 1.5 0 1 1 3.75 8.25a1.5 1.5 0 0 1 3 0ZM6 10.5H3.75V18H6v-7.5ZM20.25 18H18v-4.05c0-.96-.02-2.19-1.34-2.19-1.35 0-1.56 1.05-1.56 2.13V18h-2.25v-7.5H15v1.02h.03a2.46 2.46 0 0 1 2.22-1.22c2.37 0 2.81 1.56 2.81 3.58V18Z",
    ],
    fill: true,
  },
  xing: {
    viewBox: "0 0 24 24",
    paths: ["M8.25 7.5 10.5 11.25 7.5 16.5H4.5l3-5.25L5.25 7.5ZM15.75 3l3.75 6.75L12.75 21H9l6.75-11.25L12 3Z"],
    fill: true,
  },
};

export default function Icon({ name, className = "", ariaHidden = true, title }) {
  const icon = icons[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox}
      className={`inline-block ${className}`.trim()}
      aria-hidden={ariaHidden ? "true" : undefined}
      role={ariaHidden ? undefined : "img"}
      fill={icon.fill ? "currentColor" : "none"}
      stroke={icon.fill ? "none" : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {title ? <title>{title}</title> : null}
      {icon.paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
