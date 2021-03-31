import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '30px',
	},
}));

const ExamplesBox = (props) => {
	const { children, className, ...rest } = props;

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			<Grid container spacing={4}>
				{children}
			</Grid>
		</div>
	);
};

ExamplesBox.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	children: PropTypes.element,
};

export default ExamplesBox;
