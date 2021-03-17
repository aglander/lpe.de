/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import LegalView from 'views/LegalView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

export const query = graphql`
	query GetLegalPage($slug: String) {
		mdx(slug: { eq: $slug }) {
			id
			frontmatter {
				slug
				title
				date
				print
			}
			body
		}
	}
`;

const LegalViewTemplate = ({ data }) => {
	return <WithLayout component={LegalView} layout={Main} data={data} />;
};

export default LegalViewTemplate;
