import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ProvenExpertStars = () => {
	let provenExpertData = {
		'@context': 'https://schema.org/',
		'@type': 'AggregateRating',
		itemReviewed: {
			'@type': 'Product',
			name: 'LPE | Lars-Peter Eckhardt',
			description:
				'Ihr Makler für: Altervorsorge | Versicherungen | Finanzierungen | Immobilien',
			brand: '',
			sku: '',
			mpn: '',
			image:
				'https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/lars-peter-eckhardt_full_1524080663.jpg',
			url: 'https://www.provenexpert.com/lars-peter-eckhardt/',
		},
		ratingValue: 0,
		ratingCount: 0,
		bestRating: 5,
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
