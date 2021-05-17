import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ProvenExpertStars = () => {
	let provenExpertData = {
		'@context': 'https://schema.org/',
		'@type': 'Product',
		name: 'LPE | Lars-Peter Eckhardt',
		description:
			'Ihr Makler für: Altervorsorge | Versicherungen | Finanzierungen | Immobilien',
		brand: 'LPE',
		sku: 'LPE',
		mpn: 'LPE',
		image:
			'https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/lars-peter-eckhardt_full_1524080663.jpg',
		url: 'https://www.provenexpert.com/lars-peter-eckhardt/',
		review: {
			'@type': 'Review',
			author: {
				'@type': 'Person',
				name: '',
			},
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: 0,
			ratingCount: 0,
			bestRating: 5,
			worstRating: 1,
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
