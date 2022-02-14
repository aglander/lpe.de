import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ProvenExpert from "./proven-expert"
import Box from "./box"
import SectionHeader from "./section-header"

const Review = ({ children, authorName, authorPhoto, topic }) => (
  <Box>
    <i class="fas fa-quote-right bg-green p-4 rounded-xl text-white text-xl lg:text-3xl mb-5"></i>
    <p class="text-base hyphens">{children}</p>
    <div class="mt-5 mb-3 flex justify-center">{authorPhoto}</div>
    <h3>{authorName}</h3>
    <p class="text-sm text-textlight">{topic}</p>
  </Box>
)

const Reviews = () => {
  return (
    <>
      <SectionHeader
        preTitle={
          <>
            <i class="fas fa-star text-4xl text-yellow"></i>
            <i class="fas fa-star text-4xl text-yellow"></i>
            <i class="fas fa-star text-4xl text-yellow"></i>
            <i class="fas fa-star text-4xl text-yellow"></i>
            <i class="fas fa-star text-4xl text-yellow"></i>
          </>
        }
        title={
          <>
            <span class="text-green">Wir beraten Sie sehr gut, sagen unsere Kunden!</span>
          </>
        }
        description="Wir haben auf allen gängigen Bewertungsportalen ausnahmslos positive
        Rückmeldungen erhalten. Dies ist für uns eine große Ehre und dauerhafter Anspruch zugleich!"
      />
      <ProvenExpert />
      <div class="grid lg:grid-cols-3 lg:gap-5">
        <Review
          authorName="Steffi Richter"
          authorPhoto={
            <StaticImage
              alt="Steffi Richter"
              src="../images/Review1.png"
              placeholder="blurred"
              layout="fixed"
              width={40}
              height={40}
              class="rounded-full"
            />
          }
          topic="Altersvorsorge & Versicherungen"
        >
          Seit Jahren mein persönlicher Ansprechpartner Nr. 1 für Versicherungen
          und Altersvorsorge ... Gerade bei meiner Existenzgründung hat
          Lars-Peter Eckhardt mir ein tolles Paket geschnürt. Als
          Alleinerziehende und Selbständige sind mir Sicherheit und Vorsorge
          wichtig.
        </Review>
        <Review
          authorName="Arian Glander"
          authorPhoto={
            <StaticImage
              alt="Arian Glander"
              src="../images/Review2.jpg"
              placeholder="blurred"
              layout="fixed"
              width={40}
              height={40}
              class="rounded-full"
            />
          }
          topic="Versicherungen & Finanzierung"
        >
          Seit zwei Jahrzehnten vertraue ich Lars-Peter Eckhardt wenn es um
          Versicherungen oder Finanzierungen geht. Er geht sehr gut auf meine
          Bedürfnisse ein und findet immer die richtige Lösung. Ich kann ihn
          uneingeschränkt und jederzeit weiterempfehlen.
        </Review>
        <Review
          authorName="Josefina Bils"
          authorPhoto={
            <span class="rounded-full bg-divider w-10 h-10 flex items-center justify-center">JB</span>
          }
          topic="Finanzierung & Absicherung"
        >
          LPE hat uns zu unserer Traumimmobilie verholfen. Mit viel Geduld und
          einem Dauer positiven Denken auch wenn es mal schwer wurde. Es war
          eine ehrliche und vertrauensvolle Zusammenarbeit. Wir sind sehr froh,
          als Familie, so einen Versicherungs- und Finanzmakler an unserer Seite
          zu haben.
        </Review>        
      </div>
      <div class="text-center">
        <a
          href="https://www.provenexpert.com/de-de/lars-peter-eckhardt"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/provenexpert-logo.png"
            alt="ProvenExpert"
            placeholder="tracedSVG"
            layout="fixed"
            width={131}
            height={36}
            class="inline-block mx-5 filter grayscale hover:grayscale-0"
          />
        </a>
        <a
          href="https://www.whofinance.de/berater/lars-peter-eckhardt"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/whofinance-logo.jpg"
            alt="WhoFinance"
            placeholder="tracedSVG"
            layout="fixed"
            width={118}
            height={36}
            class="inline-block mx-5 filter grayscale hover:grayscale-0"
          />
        </a>
        <a href="https://g.page/LPE99?share" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/google-logo.png"
            alt="Google"
            placeholder="tracedSVG"
            layout="fixed"
            width={106}
            height={36}
            class="inline-block mx-5 filter grayscale hover:grayscale-0"
          />
        </a>
        <a
          href="https://www.kennstdueinen.de/finanzdienstleistungen-woltersdorf-lars-peter-eckhardt-versicherungsmakler-finanzmakler-d150186.html"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/kennstdueinen-logo.png"
            alt="Google"
            placeholder="tracedSVG"
            layout="fixed"
            width={131}
            height={36}
            class="inline-block mx-5 filter grayscale hover:grayscale-0"
          />
        </a>
      </div>
    </>
  )
}

export default Reviews
