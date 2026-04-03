import React from "react";
import Box from "./Box.jsx";

export default function ProvenExpert() {
  return (
    <Box>
      <iframe
        src="/provenexpert.html"
        className="provenexpert -mx-7 hidden border-none xl:block"
        title="ProvenExpert"
      />
      <a
        href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
        title="Kundenbewertungen und Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
        target="_blank"
        rel="noreferrer"
        className="hidden items-stretch md:flex xl:hidden"
      >
        <img
          src="/images/LPE_HP.jpg"
          alt="Lars-Peter Eckhardt"
          width="176"
          height="234"
          className="hidden border-l border-t border-b border-divider lg:inline-block"
        />
        <img
          src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_recommendation_465_0.png?t=1617907167857"
          alt="ProvenExpert Widget"
          width="465"
          height="234"
          className="hidden md:inline-block"
        />
      </a>
      <a
        href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
        title="Kundenbewertungen und Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
        target="_blank"
        rel="noreferrer"
        className="md:hidden"
      >
        <img
          src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_landscape_280_de_0.png"
          alt="ProvenExpert Widget"
          width="280"
          height="233"
        />
      </a>
    </Box>
  );
}
