import React from 'react';
import provenExpertData from '../../../../static/provenexpert.json';

const ProvenExpertStars = () => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(provenExpertData) }}
		></script>
	);
};

export default ProvenExpertStars;
