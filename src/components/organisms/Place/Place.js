import React from 'react';

const Place = (props) => {
	const { placeData, long } = props;

	return <span>{long ? placeData.title : placeData.short} </span>;
};

export default Place;
