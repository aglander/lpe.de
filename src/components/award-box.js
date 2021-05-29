import * as React from "react"
import Box from "./box"
import SectionHeader from "./section-header"
import { StaticImage } from "gatsby-plugin-image"

const AwardBox = () => (
  <Box>
    <SectionHeader
      description={
        <div class="no-hyphens">
          Seit 2011 wird LPE | Lars-Peter Eckhardt ununterbrochen durch die
          unabhängige Bewertungsplattform{" "}
          <a
            href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
            target="_blank"
            rel="noreferrer"
            class="text-green hover:text-darkgreen"
          >
            WhoFinance.de
          </a>{" "}
          als einer der Top Berater in Deutschland ausgezeichnet.
        </div>
      }
    />
    <ul class="flex flex-wrap max-w-3xl justify-center mx-auto">
      <li class="p-4">
        <a
          href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../data/assets/Auszeichnung_aktuell_1.png"
            alt="Auszeichnung 1"
            placeholder="tracedSVG"
            layout="fixed"
            width={200}
            height={92}
          />
        </a>
      </li>
      <li class="p-4">
        <a
          href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../data/assets/Auszeichnung_aktuell_2.png"
            alt="Auszeichnung 2"
            placeholder="tracedSVG"
            layout="fixed"
            width={200}
            height={92}
          />
        </a>
      </li>
      <li class="p-4">
        <a
          href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../data/assets/Auszeichnung_aktuell_3.png"
            alt="Auszeichnung 3"
            placeholder="tracedSVG"
            layout="fixed"
            width={200}
            height={92}
          />
        </a>
      </li>
      <li class="p-4">
        <a
          href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../data/assets/Auszeichnung_aktuell_4.png"
            alt="Auszeichnung 4"
            placeholder="tracedSVG"
            layout="fixed"
            width={200}
            height={92}
          />
        </a>
      </li>
      <li class="p-4">
        <a
          href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../data/assets/Auszeichnung_aktuell_5.png"
            alt="Auszeichnung 5"
            placeholder="tracedSVG"
            layout="fixed"
            width={200}
            height={92}
          />
        </a>
      </li>
      <li class="p-4">
        <a
          href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../data/assets/Auszeichnung_aktuell_6.png"
            alt="Auszeichnung 6"
            placeholder="tracedSVG"
            layout="fixed"
            width={200}
            height={92}
          />
        </a>
      </li>
    </ul>
  </Box>
)

export default AwardBox
