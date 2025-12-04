
import * as React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Divider from "../components/divider"
import Button from "../components/button"
import Section from "../components/section"
import AwardBox from "../components/award-box"
import Example from "../components/example"
import Box from "../components/box"
import CompareBox from "../components/compare-box"
import InsurancesBox from "../components/insurances-box"
import Seo from "../components/seo"
import ProvenExpert from "../components/proven-expert"
import ContactAndCompareBox from "../components/contact-and-compare-box"
import Video from "../components/video"
import Reviews from "../components/reviews"
import Mdx from "../components/mdx"
import ProvenExpertStars from "../components/proven-expert-stars"

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query GetSeoPage($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      frontmatter {
        heroClaim
        heroDescription
        heroTitle
        compare
        compareLabel
        slug
        seoTitle
        seoDescription
        heroImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
      body
    }
    allPlacesJson {
      nodes {
        short
        slug
        title
        zipcode
        long
        description
        heroImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

const Place = ({ placeData, long, description }) => {
  if (!placeData) return null
  if (long) return <>{placeData.title}</>
  if (description) {
    return (
      <p
        dangerouslySetInnerHTML={{ __html: placeData.description }}
        className="text-base lg:text-lg mb-6 lg:leading-7"
      />
    )
  }
  return <>{placeData.short}</>
}

const SeoPage = ({ data, pageContext, location }) => {
  let {
    mdx: {
      frontmatter: {
        heroTitle,
        heroClaim,
        heroDescription,
        slug,
        compare,
        compareLabel,
        heroImage,
        seoTitle,
        seoDescription,
      },
      body,
    },
    allPlacesJson: { nodes: places },
  } = data

  // 1) Primary source: pageContext.placeData (kommt aus gatsby-node.js, bereits normalisiert)
  let placeData = pageContext?.placeData

  // 2) Fallback: suche case-insensitiv in der Query, falls placeData fehlt
  if (!placeData) {
    const key = String(pageContext?.place || "").toLowerCase()
    placeData = places.find(
      (p) => String(p.slug || "").toLowerCase() === key
    )
  }

  // 3) Guards & Defaults – Build darf nie crashen
  const safeTitle = placeData?.title || heroClaim || "LPE vor Ort"
  const safeHeroImage = placeData?.heroImage || heroImage

  // 4) SEO-Title/Description um <Place /> ersetzen (falls vorhanden)
  if (seoDescription || seoTitle) {
    let placeName = ""
    if (placeData?.zipcode) placeName += `${placeData.zipcode} `
    placeName += placeData?.short || placeData?.title || ""
    if (seoTitle) seoTitle = seoTitle.replace(/<Place \/>/, placeName)
    if (seoDescription)
      seoDescription = seoDescription.replace(/<Place \/>/, placeName)
  }

  // 5) CTAs
  const ctas = (
    <>
      {compare && (
        <Button outline url={compare}>
          {compareLabel ? compareLabel : "Selber vergleichen"}
        </Button>
      )}{" "}
      {slug?.endsWith?.("-vergleichen") && (
        <Button outline url={"/" + slug.split("-vergleichen")[0]}>
          &larr; zurück
        </Button>
      )}{" "}
      <Button url="/kontakt">Kontakt aufnehmen</Button>
    </>
  )

  const components = {
    ContactAndCompareBox: () => <ContactAndCompareBox ctas={ctas} />,
    ProvenExpert,
    AwardBox,
    Example,
    Box: (props) => <Box alternate {...props} />,
    CompareBox,
    InsurancesBox,
    Video,
    Place: (props) => <Place {...props} placeData={placeData} />,
    Reviews,
  }

  // Basis-URL – hier hart https://www.lpe.de, weil das deine Domain ist
  const siteUrl = "https://www.lpe.de"
  const pageUrl = `${siteUrl}${location?.pathname || ""}`

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      <Hero
        title={
          <>
            {heroTitle}
            <br /> <span className="text-green">{safeTitle}</span>
          </>
        }
        description={heroDescription}
        image={
          safeHeroImage ? (
            <GatsbyImage
              image={getImage(safeHeroImage)}
              alt={heroTitle || safeTitle}
            />
          ) : undefined
        }
        ctas={ctas}
      />
      <Divider />
      <Section>
        <Mdx components={components}>{body}</Mdx>
        <ProvenExpertStars pageUrl={pageUrl} placeData={placeData} />
      </Section>
    </Layout>
  )
}

export default SeoPage
