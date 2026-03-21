import React from "react";

export default function ExpandBox({ title, children }) {
  return (
    <details className="rounded-md p-4 shadow">
      <summary className="cursor-pointer text-xl uppercase text-green">
        <i className="fas fa-angle-right mr-2 text-text details-marker"></i>
        {title}
      </summary>
      <div className="pt-4">{children}</div>
    </details>
  );
}
