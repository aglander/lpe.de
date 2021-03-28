import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	iframe: {
		height: '220px',
		width: '100%',
		border: 0,
		margin: '0px 0px 30px 0px',
		overflow: 'hidden',
		display: 'block'
	},
}));

const ProvenExpert = () => {

	const classes = useStyles();

	return (
		<iframe src="/provenexpert.html" className={classes.iframe} />
	);
};

export default ProvenExpert;
