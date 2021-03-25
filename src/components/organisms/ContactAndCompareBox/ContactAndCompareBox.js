import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
	root: {
		borderColor: theme.palette.alternate.dark,
    borderWidth: '1px',
    borderStyle: 'solid',
		borderRadius: theme.spacing(2),
		marginBottom: '30px',
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
	button: {
		margin: '0 5px',
	},
}));

const ContactAndCompareBox = (props) => {
	const { slug, compare, className, ...rest } = props;

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const classes = useStyles();

	const ctas = [
		<Button
			variant="contained"
			color="primary"
			size={isMd ? 'large' : 'medium'}
			className={classes.button}
		>
			Kontakt aufnehmen
		</Button>,
	];

  console.log(compare, slug, 'ARIAN');
	if (compare) {
		ctas.push(
			<Button
				variant="outlined"
				color="primary"
				size={isMd ? 'large' : 'medium'}
				href={`/${slug}-vergleichen`}
				className={classes.button}
			>
				Selber vergleichen
			</Button>
		);
	}

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
