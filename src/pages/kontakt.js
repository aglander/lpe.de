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
            <ul class="w-80 text-lg text-textlight mx-auto pl-20">
              <li class="mt-5">
                <i class="fas fa-map-marker-alt absolute -ml-14 mt-2 text-white bg-green w-10 h-10 flex text-center pt-2 text-2xl rounded-full"></i>
                <p>
                  Lerchenstraße 40
                  <br />
                  15569 Woltersdorf
                </p>
              </li>
              <li class="mt-5">
                <i class="fas fa-mobile-alt absolute -ml-14 -mt-1 text-white bg-green w-10 h-10 flex text-center pt-2 text-2xl rounded-full"></i>
                <p>
                  <a href="tel:01723829922">0172 3829922</a>
                </p>
              </li>
              <li class="mt-8">
                <i class="fas fa-phone absolute -ml-14 -mt-1 text-white bg-green w-10 h-10 flex text-center pt-2 text-2xl rounded-full"></i>
                <p>
                  <a href="tel:033627000250">03362 7000-250</a>
                </p>
              </li>
              <li class="mt-8">
                <i class="fas fa-at absolute -ml-14 -mt-1 text-white bg-green w-10 h-10 flex text-center pt-2 text-2xl rounded-full"></i>
                <p>
                  <a href="mailto:LPE@LPE.de">LPE@LPE.de</a>
                </p>
              </li>
            </ul>
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
