import React from "react";
import Box from "./Box.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Link from "./Link.jsx";

export default function CompareBox({ url }) {
  return (
    <Box>
      <SectionHeader
        title="Jetzt vergleichen"
        description={
          <>
            Mit Benutzung des Vergleichrechners bestaetige ich, dass ich die{" "}
            <Link to="/erstinformation/" className="text-green hover:text-darkgreen">
              Erstinformation
            </Link>{" "}
            gelesen und gespeichert habe.
          </>
        }
      />
      <div className="-mx-5">
        <iframe src={url} className="compare" title="Vergleichsrechner" />
      </div>
    </Box>
  );
}
