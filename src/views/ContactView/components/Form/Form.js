import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

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
