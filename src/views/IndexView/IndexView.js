import React from 'react';
import { Hero } from './components';

import {
	Section,
	SectionAlternate,
	Reviews,
	Advantages,
	ContactForm,
	About,
} from 'components/organisms';
import { Divider } from '@material-ui/core';

const IndexView = ({ themeMode }) => {
	return (
		<div>
			<Hero themeMode={themeMode} />

			<SectionAlternate>
				<Advantages />
			</SectionAlternate>
			<Divider />
			<Section>
				<Reviews />
			</Section>
			<Divider />
			<SectionAlternate>
				<About />
			</SectionAlternate>
			<Divider />
			<Section>
				<ContactForm />
			</Section>
		</div>
	);
};

export default IndexView;
