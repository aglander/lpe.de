import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import insurancesData from 'data/insurances';

const useStyles = makeStyles((theme) => ({
	root: {},
	insurance: {
		marginBottom: '30px',
	},
	title: {
		marginBottom: '30px',
	},
}));

const InsurancesBox = (props) => {
	const { title, className, ...rest } = props;

	const theme = useTheme();

	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			{insurancesData
				.filter((insurance) => {
					return title ? insurance.title === title : true;
				})
				.map((insurance) => {
					return (
						<div className={classes.insurance}>
							<Typography variant="h4" component="h2" className={classes.title}>
								{insurance.title}
							</Typography>
							<Typography
								variant="body1"
								component="p"
								className={classes.data}
							>
								{insurance.data}
							</Typography>
						</div>
					);
				})}
		</div>
	);
};

InsurancesBox.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	title: PropTypes.string,
};

export default InsurancesBox;
