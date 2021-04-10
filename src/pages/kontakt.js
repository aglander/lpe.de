import React from 'react';
import ContactView from 'views/ContactView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const KontaktPage = (props) => {
	const showSuccessScreen = props.location.search === '?success' ? true : false;
	return (
		<WithLayout
			component={ContactView}
			layout={Main}
			data={showSuccessScreen}
		/>
	);
};

export default KontaktPage;
