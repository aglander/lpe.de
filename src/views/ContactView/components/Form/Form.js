import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	useMediaQuery,
	Grid,
	Typography,
	TextField,
	Button,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped, ContactForm } from 'components/organisms';
import { Image } from 'components/atoms';
import ImageMap from 'assets/images/kontakt-karte.png';

const useStyles = makeStyles((theme) => ({
	map: {
		zIndex: 9,
	},
	form: {
		'& .MuiTextField-root': {
			background: theme.palette.background.paper,
		},
		'& .MuiOutlinedInput-input': {
			background: theme.palette.background.paper,
		},
	},
	inputTitle: {
		fontWeight: 700,
		marginBottom: theme.spacing(1),
	},
	heroleftSide: {
		[theme.breakpoints.up('md')]: {
			marginRight: theme.spacing(6),
		},
	},
}));

const Form = (props) => {
	const { data, className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const showSuccessScreen = data.data;

	return (
		<div className={className} {...rest}>
			<HeroShaped
				leftSide={
					<div className={classes.heroleftSide}>
						<ContactForm />
					</div>
				}
				rightSide={<Image src={ImageMap} />}
			/>
		</div>
	);
};

Form.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	data: PropTypes.bool.isRequired,
};

export default Form;
