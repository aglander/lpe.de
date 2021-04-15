import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
	example: {
		'& .description-list-icon__icon-wrapper span': {
			fontSize: '30px',
			border: '2px solid #68B436',
			borderRadius: '16px',
			padding: '4px 10px',
			color: '#68B436',
		},
		hyphens: 'auto'
	},
}));

const Example = (props) => {
	const { title, description, number } = props;

	const classes = useStyles();

	return (
		<Grid
			key={number}
			item
			container
			alignItems="center"
			direction="column"
			xs={12}
			sm={6}
			md={4}
			data-aos="fade-up"
		>
			<DescriptionListIcon
				icon={<span>{number}</span>}
				title={title}
				subtitle={description}
				className={classes.example}
				align="left"
			/>
		</Grid>
	);
};

Example.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	children: PropTypes.element,
};

export default Example;
