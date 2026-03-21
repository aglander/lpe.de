import React from "react";
import Box from "./Box.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function ContactAndCompareBox({ ctas }) {
  return (
    <Box>
      <SectionHeader title="Interesse geweckt?" />
      {ctas}
    </Box>
  );
}
