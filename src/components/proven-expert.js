import * as React from "react"
import Box from "./box"
import { Breakpoint } from "react-socks"

import { StaticImage } from "gatsby-plugin-image"

const ProvenExpert = () => {
  return (
    <Box>
      <Breakpoint xl up>
        <iframe
          src="/provenexpert.html"
          class="border-none provenexpert -mx-7 hidden xl:block"
          title="ProvenExpert"
        />
      </Breakpoint>
      <Breakpoint md up>
        <a
          href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
          title="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/LPE_HP.jpg"
            alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
            placeholder="blurred"
            layout="fixed"
            width={176}
            height={234}
            class="border-l border-t border-b border-divider hidden lg:inline-block xl:hidden"
          />
          <StaticImage
            src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_recommendation_465_0.png?t=1617907167857"
            alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
            placeholder="blurred"
            layout="fixed"
            width={465}
            height={234}
            class="hidden md:inline-block xl:hidden"
          />
        </a>
      </Breakpoint>
      <Breakpoint sm down>
        <a
          href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
          title="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_landscape_280_de_0.png"
            alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
            placeholder="blurred"
            layout="fixed"
            width={280}
            height={233}
            class="inline-block md:hidden"
          />
        </a>
      </Breakpoint>
    </Box>
  )
}

export default ProvenExpert
