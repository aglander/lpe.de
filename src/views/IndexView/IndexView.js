import React from 'react';
import { Hero, MobileApp } from './components';

import { Section, SectionAlternate } from 'components/organisms';

const mobileapp = [
	'Our sign up is dead simple. We only require your basic company information',
	'We support bulk uploading via SQL, integrations with most data storage products',
	"Simply select where you'd like to transfer your data ",
	'Affordable, scalable and performant. The perfect solution for small apps.',
];

const IndexView = ({ themeMode }) => {
	return (
		<div>
			<Hero themeMode={themeMode} />
			<Section>
				<MobileApp data={mobileapp} />
			</Section>
		</div>
	);
};

export default IndexView;
