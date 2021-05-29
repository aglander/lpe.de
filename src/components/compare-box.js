import * as React from "react"
import Box from "./box"
import SectionHeader from "./section-header"
import { Link } from "gatsby"

const CompareBox = ({ url }) => (
  <Box>
    <SectionHeader
      title="Jetzt vergleichen"
      description={
        <>
          Mit Benutzung des Vergleichrechners bestätige ich, dass ich die{" "}
          <Link to="/erstinformation" class="text-green hover:text-darkgreen">
            Erstinformation
          </Link>{" "}
          gelesen und gespeichert habe.
        </>
      }
    />
    <div class="-mx-5">
      <iframe src={url} class="compare" title="Vergleichsrechner" />
    </div>
  </Box>
)

export default CompareBox
