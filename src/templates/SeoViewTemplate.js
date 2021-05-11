/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SeoView from 'views/SeoView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

export const query = graphql`
	query GetSeoPage($slug: String, $image: String) {
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
		file(relativePath: { eq: $image }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
			}
		}
	}
`;

const SeoViewTemplate = ({ data, pageContext }) => {
	data.place = pageContext.place;
	return <WithLayout component={SeoView} layout={Main} data={data} />;
};

export default SeoViewTemplate;
