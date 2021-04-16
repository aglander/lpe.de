import React from 'react';
import { Hero, MobileApp } from './components';

import {
	Section,
	SectionAlternate,
	Reviews,
	Advantages,
} from 'components/organisms';
import { Divider } from '@material-ui/core';

const mobileapp = [
	'Our sign up is dead simple. We only require your basic company information',
	'We support bulk uploading via SQL, integrations with most data storage products',
	"Simply select where you'd like to transfer your data ",
	'Affordable, scalable and performant. The perfect solution for small apps.',
];

const advantages = [
	{
		icon: 'fas fa-piggy-bank',
		title: 'Altersvorsorge',
		subtitle:
			'Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.',
		link: '/altersvorsorge',
	},
	{
		icon: 'fas fa-file-contract',
		title: 'Versicherungen',
		subtitle:
			'Stay as little as 3 months with rolling contracts. Like it here? This is your space, so stay as long as you want.',
		link: '/versicherungen',
	},
	{
		icon: 'fas fa-euro-sign',
		title: 'Finanzierungen',
		subtitle:
			'Monthly fee covers everything you need hassle free. Keep cool and focus on what matters to you.',
		link: '/finanzierungen',
	},
	{
		icon: 'fas fa-home',
		title: 'Immobilien',
		subtitle:
			'24/7 support. No more hidden prices. It is your workingplace, playground, relax room.',
		link: '/immobilien',
	},
	{
		icon: 'fas fa-heart',
		title: 'Liebe Familie',
		subtitle:
			'24/7 support. No more hidden prices. It is your workingplace, playground, relax room.',
		link: '/liebe-familie',
	},
];

const IndexView = ({ themeMode }) => {
	return (
		<div>
			<Hero themeMode={themeMode} />

			<SectionAlternate>
				<Advantages data={advantages} />
			</SectionAlternate>
			<Divider />
			<Section>
				<Reviews />
			</Section>
			<Divider />
			<SectionAlternate>
				<MobileApp data={mobileapp} />
			</SectionAlternate>
		</div>
	);
};

export default IndexView;
