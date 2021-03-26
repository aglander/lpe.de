/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PlacesView from 'views/PlacesView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const OrtePage = () => {
	return <WithLayout component={PlacesView} layout={Main} />;
};

export default OrtePage;
