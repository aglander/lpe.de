import React from 'react';
import { Divider } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Form, Contact } from './components';

const ContactView = (data) => {
	return (
		<div>
			<Form data={data} />
			<Section>
				<Contact />
			</Section>
			<Divider />
		</div>
	);
};

export default ContactView;
