import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
	const { placeData, ...rest } = props;

	return <span>{placeData.short} </span>;
};

export default Place;
