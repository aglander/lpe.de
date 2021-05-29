import * as React from "react"
import Box from "./box"
import SectionHeader from "./section-header"

const ContactAndCompareBox = ({ ctas }) => (
  <Box>
    <SectionHeader title="Interesse geweckt?" />
    {ctas}
  </Box>
)

export default ContactAndCompareBox
