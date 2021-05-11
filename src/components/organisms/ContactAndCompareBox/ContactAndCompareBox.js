import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
	root: {
		borderColor: theme.palette.alternate.dark,
		borderWidth: '1px',
		borderStyle: 'solid',
		borderRadius: theme.spacing(2),
		marginBottom: '30px',
		background: theme.palette.alternate.main,
	},
	section: {
		padding: '40px',
	},
	textWhite: {
		color: 'white',
	},
	inputContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	buttonContained: {
		margin: '0 5px',
	},
	buttonOutline: {
		margin: '0 5px',
		background: 'white',
		boxShadow:
			'0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
	},
}));

const ContactAndCompareBox = (props) => {
	const { slug, compare, compareLabel, className, ...rest } = props;

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const classes = useStyles();

	const ctas = [];

	if (compare) {
		ctas.push(
			<Button
				variant="outlined"
				color="primary"
				size={isMd ? 'large' : 'medium'}
				className={classes.buttonOutline}
				component={compare.startsWith('http') ? 'a' : Link}
				target={compare.startsWith('http') && '_blank' }
				to={compare}
				href={compare}
			>
				{compareLabel ? compareLabel : 'Selber vergleichen'}
			</Button>
		);
	}

	ctas.push(
		<Button
			variant="contained"
			color="primary"
			size={isMd ? 'large' : 'medium'}
			className={classes.buttonContained}
			component={Link}
			to="/kontakt"
		>
			Kontakt aufnehmen
		</Button>
	);

	return (
		<div className={clsx(classes.root, className)} {...rest}>
			<Section className={classes.section}>
				<SectionHeader title={<span>Interesse geweckt?</span>} fadeUp />
				<div className={classes.inputContainer}>{ctas}</div>
			</Section>
		</div>
	);
};

ContactAndCompareBox.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
};

export default ContactAndCompareBox;
