import React from 'react';
import { Divider } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Form, Contact } from './components';

const ContactView = () => {
	const mapData = [
		{
			location: {
				y: 45.453211,
				x: 9.248383,
				address: 'Via A.G. Alaimo 147, 55027',
			},
		},
	];
	return (
		<div>
			<Form data={mapData} />
			<Section>
				<Contact />
			</Section>
			<Divider />
		</div>
	);
};

export default ContactView;
