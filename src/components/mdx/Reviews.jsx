import React from "react";
import Box from "./Box.jsx";
import ProvenExpert from "./ProvenExpert.jsx";
import SectionHeader from "./SectionHeader.jsx";

function Review({ children, authorName, authorPhoto, topic }) {
  return (
    <Box>
      <div className="flex h-full flex-col">
        <i className="fas fa-quote-right mx-auto mb-4 rounded-lg bg-green p-3 text-lg text-white lg:text-2xl"></i>
        <p className="flex-1 text-base leading-7 [hyphens:auto]">{children}</p>
        <div className="mt-3 flex flex-col items-center">
          <img
            src={authorPhoto}
            alt={authorName}
            width="44"
            height="44"
            className="mb-1.5 rounded-full object-cover"
          />
          <h3 className="mb-1 text-center text-xl font-bold leading-tight text-grey lg:text-2xl">
            {authorName}
          </h3>
          <p className="text-center text-sm leading-snug text-textlight lg:text-base">{topic}</p>
        </div>
      </div>
    </Box>
  );
}

export default function Reviews() {
  return (
    <>
      <SectionHeader
        preTitle={
          <>
            <i className="fas fa-star text-4xl text-yellow"></i>
            <i className="fas fa-star text-4xl text-yellow"></i>
            <i className="fas fa-star text-4xl text-yellow"></i>
            <i className="fas fa-star text-4xl text-yellow"></i>
            <i className="fas fa-star text-4xl text-yellow"></i>
          </>
        }
        title={<span className="text-green">Wir beraten Sie sehr gut, sagen unsere Kunden!</span>}
        description="Die vielen positiven Bewertungen und Rückmeldungen sind uns eine große Ehre und dauerhafter Anspruch zugleich."
      />
      <ProvenExpert />
      <div className="grid gap-5 lg:grid-cols-3">
        <Review
          authorName="Steffi Richter"
          authorPhoto="/images/Review1.png"
          topic="Altersvorsorge & Versicherungen"
        >
          Seit Jahren mein persönlicher Ansprechpartner Nr. 1 für Versicherungen
          und Altersvorsorge. Gerade bei meiner Existenzgründung hat Lars-Peter
          Eckhardt mir ein tolles Paket geschnürt.
        </Review>
        <Review
          authorName="Arian Glander"
          authorPhoto="/images/Review2.jpg"
          topic="Versicherungen & Finanzierung"
        >
          Seit zwei Jahrzehnten vertraue ich Lars-Peter Eckhardt wenn es um
          Versicherungen oder Finanzierungen geht. Er findet immer die richtige
          Lösung.
        </Review>
        <Review
          authorName="Josefina Bils"
          authorPhoto="/images/Review3.jpeg"
          topic="Finanzierung & Absicherung"
        >
          LPE hat uns zu unserer Traumimmobilie verholfen. Es war eine ehrliche
          und vertrauensvolle Zusammenarbeit, für die wir als Familie sehr dankbar sind.
        </Review>
      </div>
      <div className="text-center">
        <a href="https://www.provenexpert.com/de-de/lars-peter-eckhardt" target="_blank" rel="noreferrer">
          <img
            src="/images/provenexpert-logo.png"
            alt="ProvenExpert"
            width="131"
            height="36"
            className="mx-5 inline-block grayscale hover:grayscale-0"
          />
        </a>
        <a href="https://www.whofinance.de/berater/lars-peter-eckhardt" target="_blank" rel="noreferrer">
          <img
            src="/images/whofinance-logo.jpg"
            alt="WhoFinance"
            width="118"
            height="36"
            className="mx-5 inline-block grayscale hover:grayscale-0"
          />
        </a>
        <a href="https://g.page/LPE99?share" target="_blank" rel="noreferrer">
          <img
            src="/images/google-logo.png"
            alt="Google"
            width="106"
            height="36"
            className="mx-5 inline-block grayscale hover:grayscale-0"
          />
        </a>
        <a
          href="https://www.kennstdueinen.de/finanzdienstleistungen-woltersdorf-lars-peter-eckhardt-versicherungsmakler-finanzmakler-d150186.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/kennstdueinen-logo.png"
            alt="KennstDuEinen"
            width="131"
            height="36"
            className="mx-5 inline-block grayscale hover:grayscale-0"
          />
        </a>
      </div>
    </>
  );
}
