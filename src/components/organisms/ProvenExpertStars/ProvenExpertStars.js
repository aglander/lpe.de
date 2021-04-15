import React from 'react';
import provenExpertData from '../../../../static/provenexpert.json';

const ProvenExpertStars = () => {
	console.log(provenExpertData);
	const test = { arian: 'ist doof' };
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(provenExpertData) }}
		></script>
	);
};

export default ProvenExpertStars;
