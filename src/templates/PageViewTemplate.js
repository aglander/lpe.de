/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PageView from 'views/PageView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

export const query = graphql`
	query GetDetailPage($slug: String) {
		mdx(slug: { eq: $slug }) {
			id
			frontmatter {
				heroClaim
				heroDescription
				heroTitle
				compare
				slug
				heroImage {
					childImageSharp {
						gatsbyImageData(
							width: 1000
							placeholder: BLURRED
							layout: FIXED
						)
					}
				}
			}
			body
		}
	}
`;

const PageViewTemplate = ({ data }) => {
	return <WithLayout component={PageView} layout={Main} data={data} />;
};

export default PageViewTemplate;
