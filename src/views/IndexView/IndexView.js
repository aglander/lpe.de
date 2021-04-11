import React from 'react';
import { Hero, MobileApp } from './components';

import { Section, SectionAlternate, Reviews, Advantages } from 'components/organisms';
import { Divider } from '@material-ui/core';

const mobileapp = [
	'Our sign up is dead simple. We only require your basic company information',
	'We support bulk uploading via SQL, integrations with most data storage products',
	"Simply select where you'd like to transfer your data ",
	'Affordable, scalable and performant. The perfect solution for small apps.',
];

export const reviews = [
	{
		authorPhoto: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
		authorName: 'Sarah Herbeler',
		authorOccupation: 'Hausfinanzierung und Versicherungsvergleich mit Extras',
		feedback:
			'Wir haben über Herrn Eckhardt unser Haus finanziert und auch die vorhandenen Versicherungen an die neue Situation angepasst. Die Vorsorgevollmacht und Patientenverfügung geben uns ein gutes Gefühl.',
	},
	{
		authorPhoto: '../../../assets/images/Review2.jpg',
		authorName: 'Arian Glander',
		authorOccupation: 'Versicherungen und Finanzierung',
		feedback:
			'Seit 2 Jahrzehnten vertraue ich Lars-Peter Eckhardt wenn es um Versicherungen oder Finanzierungen geht. Er geht sehr gut auf meine Bedürfnisse ein und findet immer die richtige Lösung. Ich kann ihn uneingeschränkt und jederzeit weiterempfehlen.',
	},
	{
		authorPhoto: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
		authorName: 'Ronny Reimer',
		authorOccupation: 'Hauskauf',
		feedback:
			'Individuelle, fachlich kompetente Beratung. Nimmt sich viel Zeit und geht auf die speziellen Bedürfnisse ein. Endlich mal ein Berater, der einen nicht nur mit Fachbegriffen verunsichert. Fragen wurden ausführlich und verständlich beantwortet. Gern wieder.',
	},
];

const advantages = [
	{
	  icon: 'fas fa-users',
	  title: 'Altersvorsorge',
	  subtitle:
		'Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.',
	},
	{
	  icon: 'far fa-address-book',
	  title: 'Versicherungen',
	  subtitle:
		'Stay as little as 3 months with rolling contracts. Like it here? This is your space, so stay as long as you want.',
	},
	{
	  icon: 'fab fa-angellist',
	  title: 'Finanzierungen',
	  subtitle:
		'Monthly fee covers everything you need hassle free. Keep cool and focus on what matters to you.',
	},
	{
	  icon: 'fas fa-phone-alt',
	  title: 'Immobilien',
	  subtitle:
		'24/7 support. No more hidden prices. It is your workingplace, playground, relax room.',
	},
	{
		icon: 'fas fa-phone-alt',
		title: 'Liebe Familie',
		subtitle:
		  '24/7 support. No more hidden prices. It is your workingplace, playground, relax room.',
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
				<Reviews data={reviews} />
			</Section>
			<Divider />
			<SectionAlternate>
				<MobileApp data={mobileapp} />
			</SectionAlternate>
		</div>
	);
};

export default IndexView;
