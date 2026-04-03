import React from "react";
import Box from "./Box.jsx";
import SectionHeader from "./SectionHeader.jsx";

const awards = [1, 2, 3, 4, 5, 6];

export default function AwardBox() {
  return (
    <Box>
      <SectionHeader
        description={
          <div className="no-hyphens">
            Seit 2011 wird LPE | Lars-Peter Eckhardt ununterbrochen durch die
            unabhängige Bewertungsplattform{" "}
            <a
              href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
              target="_blank"
              rel="noreferrer"
              className="text-green hover:text-darkgreen"
            >
              WhoFinance.de
            </a>{" "}
            als einer der Top Berater in Deutschland ausgezeichnet.
          </div>
        }
      />
      <ul className="mx-auto flex max-w-3xl list-none flex-wrap justify-center pl-0">
        {awards.map((award) => (
          <li key={award} className="list-none p-4">
            <a
              href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`/assets/Auszeichnung_aktuell_${award}.png`}
                alt={`Auszeichnung ${award}`}
                width="200"
                height="92"
              />
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
}
