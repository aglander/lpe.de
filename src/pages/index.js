import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Divider from "../components/divider"
import Section from "../components/section"
import SectionHeader from "../components/section-header"
import Reviews from "../components/reviews"
import Box from "../components/box"
import Button from "../components/button"
import Hero from "../components/hero"
import ContactForm from "../components/contact-form"
import TypedText from "../components/typed-text"

const Advantage = ({ children, title }) => (
  <li class="mt-2">
    <i class="fa fa-check-circle text-green text-2xl md:text-4xl absolute -ml-10 md:-ml-14 mt-2 md:mt-3"></i>
    <p class="text-textlight hyphens">
      <strong class="pb-2">{title}</strong>
      <br /> {children}
    </p>
  </li>
)

const Solution = ({ children, title, link, icon }) => (
  <div class="max-w-lg flex text-center py-4 lg:p-4">
    <Link to={link}>
      <i class={icon + " text-green text-4xl"}></i>
      <h3 class="text-xl font-bold my-3">{title}</h3>
      <p class="text-textlight hyphens text-left lg:text-center">{children}</p>
    </Link>
  </div>
)

const IndexPage = () => (
  <Layout>
    <Hero
      title={
        <>
          Willkommen bei <br /> Lars-Peter Eckhardt,
          <br /> Ihrem unabhängigen <br />
          <TypedText
            strings={[
              "Versicherungsmakler",
              "Finanzmakler",
              "Vorsorgeberater",
              "Generationenberater",
            ]}
            className="text-green"
          />
        </>
      }
      description="Wir beraten Sie sehr gerne persönlich, bei uns im Büro, vor Ort und
    selbstverständlich, für Sie besonders bequem, auch per Telefonberatung
    und Videoberatung."
      ctas={<Button url="/kontakt">Kontakt aufnehmen</Button>}
      image={
        <StaticImage
          src="../images/LPE_Start.jpg"
          alt="Lars-Peter Eckhardt"
          placeholder="blurred"
          layout="fullWidth"
        />
      }
    />
    <Divider />
    <Section alternate>
      <SectionHeader
        title={
          <>
            Das Wichtigste geregelt haben: Das „Liebe-Familie-Rezept“{" "}
            <span class="text-green"> mit einem funktionierenden Notfallplan!</span>
          </>
          }
        description={
          <>
            Wenn Sie es erlauben, möchten wir Sie am liebsten möglichst lange
            begleiten. Daher sind unsere Beratungen langfristig und unsere
            Lösungen individuell an alle Ihre Lebensphasen angelehnt. Wir
            verbinden dabei im Optimalfall die folgenden 5 Bereiche in unserem{" "}
            <strong>
              „Liebe-Familie-Rezept“ mit einem funktionierenden Notfallplan!
            </strong>
          </>
        }
      />
      <div class="flex flex-wrap justify-around">
        <Solution
          link="/altersvorsorge"
          title="Altersvorsorge"
          icon="fas fa-piggy-bank"
        >
          Erhalten Sie Ihre finanzielle Unabhängigkeit im Alter! Mit einer guten
          Planung schaffen Sie die richtige Balance zwischen jetzt gut leben,
          für später sinnvoll investieren und im Ruhestand mit dem vorhandenen
          Kapital auskommen. Dafür liefern wir Ihnen die passenden Strategien in
          jeder Lebensphase!
        </Solution>
        <Solution
          link="/versicherungen"
          title="Versicherungen"
          icon="fas fa-file-contract"
        >
          Risiken richtig absichern! Von A - wie Arbeitskraftabsicherung, über F
          - wie Familienvorsorge und H - wie Heim- & Haus richtig schützen bis Z
          - wie Zusatzversicherungen. Viele Anbieter, viele Tarife – der
          Versicherungsdschungel undurchschaubar? Wir sorgen für die richtigen
          Absicherungen, zur richtigen Zeit!
        </Solution>
        <Solution
          link="/finanzierungen"
          title="Finanzierungen"
          icon="fas fa-euro-sign"
        >
          Leben Sie sich Ihren Traum! Die Planung für Ihren ersten Hausbau oder
          der Kauf einer Immobilie, die anstehende Anschlussfinanzierung oder
          eine Sanierung / Modernisierung - mit individuell auf Sie
          ausgerichteten Finanzierungslösungen erreichen Sie Ihren Traum und
          behalten jederzeit die Kontrolle.
        </Solution>
        <Solution link="/immobilien" title="Immobilien" icon="fas fa-home">
          Immobilien als Kapitalanlage oder der Wunsch Ihre Immobilie zu
          verkaufen! Wir stellen Ihnen ein großes Portfolio attraktiver
          Immobilienangebote an verschiedenen Standorten in Deutschland zur
          Verfügung. Sie wollen oder müssen Ihre Immobilie verkaufen? Wir
          stellen den Kontakt zu ausgewählten Interessenten her!
        </Solution>
        <Solution
          link="/liebe-familie"
          title="Liebe Familie"
          icon="fas fa-heart"
        >
          Das Wichtigste geregelt haben, die Harmonie in der Familie erhalten
          und Niemandem zur Last fallen! Patientenverfügung und
          Vorsorgevollmacht, Sorgerechtsverfügungen für Ihre Kinder, die Pflege
          der Eltern und deren Unterhalt, sowie der letzte Wille. Einmal geklärt
          und bei Bedarf angepasst, gibt es Ihnen ein rund um gutes Gefühl!
        </Solution>
      </div>
    </Section>
    <Divider />
    <Section>
      <Reviews />
    </Section>
    <Divider />
    <Section alternate>
      <SectionHeader
        preTitle={
          <div class="w-24 h-24 overflow-hidden rounded-full inline-block">
            <StaticImage
              src="../images/LPE_HP.jpg"
              alt="Lars-Peter Eckhardt"
              placeholder="blurred"
              layout="constrained"
              width={100}
              height={133}
            />
          </div>
        }
        title="LPE | Lars-Peter Eckhardt"
        description="Als mehrfach ausgezeichneter, unabhängiger Versicherungsmakler &
      Finanzmakler ist es mein Anspruch, Sie gut zu beraten, gut zu betreuen
      und möglichst sehr, sehr lange mit Ihnen zusammenzuarbeiten. Mein Team
      und ich stehen dafür an Ihrer Seite."
      />

      <div class="lg:grid lg:grid-cols-2 lg:gap-5">
        <Box alternate>
          <h3 class="text-2xl mb-5">Unsere Kriterien</h3>
          <ul class="text-left ml-12">
            <Advantage title="Unabhängigkeit">
              Als Versicherungsmakler nach §34d GewO bin ich sogar gesetzlich
              dazu verpflichtet, die Interessen unserer Kunden unabhängig
              wahrzunehmen.
            </Advantage>
            <Advantage title="Kompetenz">
              Meine IHK-Ausbildungen zum Fachwirt für Finanzberatung,
              Baufinanzierungsberater und Generationenberater
              gewährleistet die ganzheitliche Beratung.
            </Advantage>
            <Advantage title="Erfahrung">
              Nach ersten Erfahrungen bei einer Versicherungsgesellschaft, stieg
              mein eigener Anspruch an zufriedene Kunden. 1999 gab es den
              Startschuss für LPE.
            </Advantage>
            <Advantage title="Vertrauen">
              Versicherungen sind (keine) Vertrauenssache. Seien Sie gerne
              kritisch, prüfen und fordern Sie uns. Viele hundert Kunden
              vertrauen uns seit vielen Jahren!
            </Advantage>
          </ul>
        </Box>
        <Box alternate>
          <h3 class="text-2xl mb-5">Unser Beratungsansatz</h3>
          <ul class="text-left ml-12">
            <Advantage title="Langfristig">
              Am liebsten betrachten wir unseren gemeinsamen Weg langfristig und
              in allen Lebensphasen. Das bedeutet mehr Planungssicherheit für
              Sie!
            </Advantage>
            <Advantage title="Unabhängig">
              Eine geeignet große Auswahl verschiedener
              Versicherungsgesellschaften, über 400 Banken und Bausparkassen
              sichert Ihnen ein breites Angebot!
            </Advantage>
            <Advantage title="Ganzheitlich">
              Eine saubere Analyse Ihrer aktuellen Lebenssituation, die
              Erfassung von Zielen / Wünschen ermöglicht uns die individuelle
              Gestaltung Ihrer Lösungen!
            </Advantage>
            <Advantage title="Die „Extrameile“">
              Ist unser „Liebe-Familie-Rezept“. Wir sind von der Notwendigkeit
              überzeugt und eröffnen Ihnen Lösungsmöglichkeiten die Sie
              begeistern!
            </Advantage>
          </ul>
        </Box>
      </div>
    </Section>
    <Divider />
    <Section>
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
