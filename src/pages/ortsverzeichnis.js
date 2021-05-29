import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Section from "../components/section"
import SectionHeader from "../components/section-header"

const OrtsverzeichnisPage = () => {
  const {
    allMdx: { nodes: pages },
    allPlacesJson: { nodes: places },
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "./data/seo./" } }) {
        nodes {
          frontmatter {
            heroTitle
            slug
          }
        }
      }
      allPlacesJson {
        nodes {
          short
          slug
          title
          zipcode
          long
        }
      }
    }
  `)

  const placesList = places.map(place => {
    const renderSeoPages = (placeSlug, pages) => {
      const seoPages = pages.map(node => {
        const {
          frontmatter: { heroTitle, slug },
        } = node
        const url = `/${slug}-${placeSlug}`
        return (
          <li>
            <Link to={url} class="text-green font-bold hover:text-darkgreen">{heroTitle}</Link>
          </li>
        )
      })
      return <ul class="text-xl list-disc list-inside mb-8">{seoPages}</ul>
    }

    return (
      <div class="lg:w-1/2 lg:px-5">
        <h2 class="text-4xl mt-12 mb-8 border-b border-divider pb-4">{place.title}</h2>
        {renderSeoPages(place.slug, pages)}
      </div>
    )
  })

  return (
    <Layout>
      <Section>
        <SectionHeader title="Ortsverzeichnis" />
        <div class="lg:flex lg:flex-wrap">{placesList}</div>
      </Section>
    </Layout>
  )
}

export default OrtsverzeichnisPage
