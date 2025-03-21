import * as React from "react"
import ContactForm from "../components/contact-form"
import Layout from "../components/layout"
import Divider from "../components/divider"
import Section from "../components/section"
import SectionHeader from "../components/section-header"
import Hero from "../components/hero"
import Button from "../components/button"
import { StaticImage } from "gatsby-plugin-image"

const KontaktPage = ({ location }) => {
  const showSuccessScreen = location.search === "?success" ? true : false

  return (
    <Layout>
      <Hero
        image={
          <StaticImage
            src="../images/kontakt-karte.png"
            alt="Lars-Peter Eckhardt"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <div class="mt-10 mb-5 lg:mb-0">
          {showSuccessScreen ? (
            <SectionHeader
              preTitle={
                <i class="fa fa-check-circle text-green text-8xl mt-5"></i>
              }
              title="Erfolgreich abgeschickt"
              description="Vielen Dank für Ihre Nachricht. Wir werden Ihre Anfrage so schnell wie möglich bearbeiten!"
            />
          ) : (
            <ContactForm />
          )}
        </div>
      </Hero>
      <Divider />
      <Section>
        <div class="md:grid md:grid-cols-2 md:gap-40">
          <div>
            <SectionHeader
              title="Kontaktdaten"
              description="Zögern Sie bitte nicht mit Ihrer Kontaktaufnahme. Wir freuen uns darüber und kümmern uns gerne so schnell wie möglich um die Lösung Ihrer Anliegen:"
            />
            <p>
              <br />
              <b>Grey Versicherungsmakler GmbH & Co. KG</b><br />
              Lars-Peter Eckhardt<br />
              E-Mail: LPE (at) LPE.de<br />
              Webseite: <a href="https://www.lpe.de">www.LPE.de</a><br /><br />
            </p>
            <p>
              <b>Postanschrift & Sitz Müncheberg:</b><br />
              Wasserstraße 2<br />
              15374 Müncheberg<br />
              Telefon: +49 (33432) 89101<br />
              Telefax: +49 (33432) 89104<br /><br />
            </p>
            <p>
              <b>Niederlassung Woltersdorf bei Berlin:</b><br />
              Lerchenstr. 40<br />
              15569 Woltersdorf bei Berlin<br />
              Telefon: +49 (3362) 7000250<br />
              Telefax: +49 (3362) 7000251<br />
            </p>
          </div>
          <div class="mt-10 md:mt-0">
            <SectionHeader
              title="Videoberatung"
              description="Für unsere Videoberatung mit BRIDGE benötigen Sie keine Downloads oder Installationen. Ein PC, Laptop, Tablet mit Internetzugang und schon gehts los:"
            />
            <div class="text-center">
              <p>
                <a
                  href="https://fondsfinanz.br-idge.de/public/room.a?key=LPE&skipCheck=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-laptop-house text-9xl text-green p-5 mt-5"></i>
                </a>
              </p>
              <p>
                <Button url="https://fondsfinanz.br-idge.de/public/room.a?key=LPE&skipCheck=true">
                  Jetzt Starten
                </Button>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default KontaktPage
