import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
	const { placeData, ...rest } = props;
	let placeName = placeData.title;
	if (placeData.placeNames) {
		const placeNames = placeData.placeNames;
		placeName = placeNames[Math.floor(Math.random() * placeNames.length)];
	}
	return <span>{placeName} </span>;
};

export default Place;
