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
import Mdx from "../components/mdx"
import Navigation from "../components/navigation"
import ProvenExpertStars from "../components/proven-expert-stars"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export const query = graphql`
  query GetDetailPage($slug: String) {
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
  }
`

const Page = ({ data }) => {
  const {
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
  } = data

  const ctas = (
    <>
      {compare && (
        <Button outline url={compare}>
          {compareLabel ? compareLabel : "Selber vergleichen"}
        </Button>
      )}{" "}
      {slug.endsWith("-vergleichen") && (
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
    Box: (props) => <Box alternate  {...props} />,
    CompareBox,
    InsurancesBox,
    Video,
    Navigation,
  }

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      <Hero
        title={
          <>
            {heroTitle}
            <br /> <span class="text-green">{heroClaim}</span>
          </>
        }
        description={heroDescription}
        image={<GatsbyImage image={getImage(heroImage)} alt={heroTitle} />}
        ctas={ctas}
      />
      <Divider />
      <Section>
        <Mdx components={components}>{body}</Mdx>
        <ProvenExpertStars />
      </Section>
    </Layout>
  )
}

export default Page
