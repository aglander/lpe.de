import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Grid,
	Accordion as MuiAccordion,
	AccordionSummary as MuiAccordionSummary,
	AccordionDetails as MuiAccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: 'bold',
	},
	accordionGrid: {
		'& .accordion__item-wrapper': {
			boxShadow: '0 1.5rem 4rem rgba(22,28,45,.05)',
		},
	},
	fontWeightBold: {
		fontWeight: 'bold',
	},
	fontWeight300: {
		fontWeight: 300,
	},
	listItemAvatar: {
		marginRight: theme.spacing(2),
	},
	listItemText: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
}));

function makeid(length) {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

const ExpandBox = (props) => {
	const { title, children, className, ...rest } = props;
	const classes = useStyles();
	const id = 'expand-' + makeid(5);
	return (
		<div className={clsx(className,classes.accordionGrid)} {...rest}>
			<MuiAccordion
				className={clsx('accordion__item-wrapper', classes.listItem)}
				key={id}
			>
				<MuiAccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={`${id}-content`}
					id={id}
				>
					<Grid container spacing={0} className="accorion__item-text-container">
						<Grid item xs={12} className="accorion__item-title-container">
							<Typography
								variant="h6"
								color="textPrimary"
								className="accorion_item-title"
							>
								{title}
							</Typography>
						</Grid>
					</Grid>
				</MuiAccordionSummary>
				<MuiAccordionDetails>
					<Grid
						container
						spacing={2}
						className="accordion__collapsable-text-container"
					>
						<Grid item xs={12} className="accordion__collapsable-text-wrapper">
							<Typography
								variant="body1"
								color="textPrimary"
								className="accordion__collapsable-text"
							>
								{children}
							</Typography>
						</Grid>
					</Grid>
				</MuiAccordionDetails>
			</MuiAccordion>
		</div>
	);
};

ExpandBox.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	title: PropTypes.object.isRequired,
};

export default ExpandBox;
