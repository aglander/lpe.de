import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
	const { placeData, long, ...rest } = props;

	return <span>{long ? placeData.title : placeData.short} </span>;
};

export default Place;
