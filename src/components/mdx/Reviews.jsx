import React from "react";
import Box from "./Box.jsx";
import ProvenExpert from "./ProvenExpert.jsx";
import SectionHeader from "./SectionHeader.jsx";

function Review({ children, authorName, authorPhoto, topic }) {
  return (
    <Box>
      <i className="fas fa-quote-right mb-5 rounded-xl bg-green p-4 text-xl text-white lg:text-3xl"></i>
      <p className="text-base [hyphens:auto]">{children}</p>
      <div className="mt-5 mb-3 flex justify-center">
        <img src={authorPhoto} alt={authorName} width="40" height="40" className="rounded-full" />
      </div>
      <h3>{authorName}</h3>
      <p className="text-sm text-textlight">{topic}</p>
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
        description="Die vielen positiven Bewertungen und Rueckmeldungen sind uns eine grosse Ehre und dauerhafter Anspruch zugleich."
      />
      <ProvenExpert />
      <div className="grid lg:grid-cols-3 lg:gap-5">
        <Review
          authorName="Steffi Richter"
          authorPhoto="/images/Review1.png"
          topic="Altersvorsorge & Versicherungen"
        >
          Seit Jahren mein persoenlicher Ansprechpartner Nr. 1 fuer Versicherungen
          und Altersvorsorge. Gerade bei meiner Existenzgruendung hat Lars-Peter
          Eckhardt mir ein tolles Paket geschnuert.
        </Review>
        <Review
          authorName="Arian Glander"
          authorPhoto="/images/Review2.jpg"
          topic="Versicherungen & Finanzierung"
        >
          Seit zwei Jahrzehnten vertraue ich Lars-Peter Eckhardt wenn es um
          Versicherungen oder Finanzierungen geht. Er findet immer die richtige
          Loesung.
        </Review>
        <Review
          authorName="Josefina Bils"
          authorPhoto="/images/Review3.jpeg"
          topic="Finanzierung & Absicherung"
        >
          LPE hat uns zu unserer Traumimmobilie verholfen. Es war eine ehrliche
          und vertrauensvolle Zusammenarbeit, fuer die wir als Familie sehr dankbar sind.
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
