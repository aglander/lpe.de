import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {},
	iframe: {
		width: '100%',
		minHeight: '1100px',
		border: 0,
	}
}));

const CompareBox = (props) => {
	const { url, className, ...rest } = props;

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			<iframe
				src={url}
				className={classes.iframe}
				title="Vergleichsrechner"
			/>
		</div>
	);
};

CompareBox.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * url to be opened
	 */
	url: PropTypes.string,
};

export default CompareBox;
