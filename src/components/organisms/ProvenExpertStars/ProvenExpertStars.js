import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ProvenExpertStars = () => {
	let provenExpertData = {
		'@context': 'https://schema.org/',
		'@type': 'Product',
		name: 'Lars-Peter Eckhardt',
		description: 'Ihr Makler für: Altervorsorge | Versicherungen | Finanzierungen | Immobilien',
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: 0,
			ratingCount: 0,
			bestRating: 5,
		},
	};

	const { dataJson: dynamicValues } = useStaticQuery(graphql`
		{
			dataJson {
				ratingValue
				reviewCount
				aggregateRating
			}
		}
	`);

	provenExpertData.aggregateRating.ratingValue = dynamicValues.ratingValue;
	provenExpertData.aggregateRating.ratingCount = dynamicValues.reviewCount;

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(provenExpertData) }}
		></script>
	);
};

export default ProvenExpertStars;
