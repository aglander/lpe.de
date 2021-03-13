/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CompareView from 'views/CompareView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

export const query = graphql`
	query GetComparePage($slug: String) {
		mdx(slug: { eq: $slug }) {
			id
			frontmatter {
				title
				heroClaim
				heroDescription
				heroTitle
				compare
			}
			slug
			body
		}
	}
`;

const PageViewTemplate = ({ data }) => {
	return <WithLayout component={CompareView} layout={Main} data={data} />;
};

export default PageViewTemplate;
