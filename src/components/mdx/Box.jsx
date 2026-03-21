import React from "react";
import SectionHeader from "./SectionHeader.jsx";

export default function Box({ children, title, alternate = false }) {
  return (
    <div className={`content-box ${alternate ? "bg-white" : "bg-lightgrey"}`}>
      {title ? <SectionHeader title={title} /> : null}
      {children}
    </div>
  );
}
