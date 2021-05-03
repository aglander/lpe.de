import React from 'react';
import { Hero } from './components';

import {
	Section,
	SectionAlternate,
	Reviews,
	Advantages,
	ContactForm,
	About
} from 'components/organisms';
import { Divider } from '@material-ui/core';

const advantages = [
	{
		icon: 'fas fa-piggy-bank',
		title: 'Altersvorsorge',
		subtitle:
			'Erhalten Sie Ihre finanzielle Unabhängigkeit im Alter! Mit einer guten Planung schaffen Sie die richtige Balance zwischen jetzt leben, für später sinnvoll investieren und im Ruhestand mit dem vorhandenen Kapital auszukommen. Dafür liefern wir Ihnen die passenden Strategien in jeder Lebensphase!',
		link: '/altersvorsorge',
	},
	{
		icon: 'fas fa-file-contract',
		title: 'Versicherungen',
		subtitle:
			'Risiken richtig absichern! Von A - wie Arbeitskraftabsicherung, über F - wie Familienvorsorge und H - wie Heim- & Haus richtig absichern bis Z - wie Zusatzversicherungen. Viele Anbieter, viele Tarife – der Versicherungsdschungel ist schwer zu durchschauen. Wir sorgen für die richtigen Absicherungen, zur richtigen Zeit!',
		link: '/versicherungen',
	},
	{
		icon: 'fas fa-euro-sign',
		title: 'Finanzierungen',
		subtitle:
			'Erfüllen Sie sich Ihren Traum! Ob Planung für Ihre ersten Hausbau oder den Kauf einer Immobilie, die anstehende Anschlussfinanzierung oder eine Sanierung / Modernisierung - mit einer auf Sie individuell ausgerichteten Finanzierung erreichen Sie Ihren Wunsch und behalten jederzeit die Kontrolle.',
		link: '/finanzierungen',
	},
	{
		icon: 'fas fa-home',
		title: 'Immobilien',
		subtitle:
			'Immobilien als Kapitalanlage oder Ihr Wunsch Ihre Immobilie zu verkaufen! Ein großes Portfolio attraktiver Immobilienangebote an verschiedenen Standorten in Deutschland stellen wir Ihnen zur Verfügung. Sie wollen oder müssen Ihre Immobilie verkaufen? Gerne stellen wir den Kontakt zu ausgewählten Interessenten her! ',
		link: '/immobilien',
	},
	{
		icon: 'fas fa-heart',
		title: 'Liebe Familie',
		subtitle:
			'Das Wichtigste geregelt haben, die Harmonie in der Familie erhalten und Niemandem zur Last fallen! Patientenverfügung und Vorsorgevollmacht, Sorgerechtsverfügungen für Ihre Kinder, die Pflege der Eltern und deren Unterhalt, sowie der letzte Wille. Einmal geklärt und bei Bedarf angepasst, gibt es Ihnen ein rund um gutes Gefühl!',
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
