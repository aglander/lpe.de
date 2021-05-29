import * as React from "react"

import Layout from "../components/layout"
import Button from "../components/button"
import Section from "../components/section"
import Mdx from "../components/mdx"
import ExpandBox from "../components/expand-box"

import { graphql } from "gatsby"

export const query = graphql`
  query GetLegalPage($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      frontmatter {
        slug
        title
        date(formatString: "DD. MMMM YYYY", locale: "de")
        print
      }
      body
    }
  }
`

const Legal = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, print, date },
      body,
    },
  } = data

  const components = {
    ExpandBox
  };

  return (
    <Layout>
      <Section>
        <div class="mb-5 border-b border-divider">
          <h1 class="py-2 mb-2 text-4xl md:text-6xl text-grey">{title}</h1>
          {date && print && (
            <div class="grid grid-cols-2">
              <p class="md:text-xl mb-2 text-textlight">
                Zuletzt aktualisiert: {date}
              </p>
              <div class="text-right -mt-4">
                <Button url={"https://www.lpe.de/" + print} outline>
                  Drucken
                </Button>
              </div>
            </div>
          )}
        </div>
        <Mdx components={components}>{body}</Mdx>
      </Section>
    </Layout>
  )
}

export default Legal
