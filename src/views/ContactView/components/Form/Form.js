import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { HeroShaped, ContactForm } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
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

	const showSuccessScreen = data.data;

	return (
		<div className={className} {...rest}>
			<HeroShaped
				leftSide={
					<div className={classes.heroleftSide}>
						{showSuccessScreen ? (
							<div>
								<SectionHeader
									title="Erfolgreich abgeschickt"
									subtitle="Vielen Dank für Ihre Nachricht. Wir werden Ihre Anfrage so schnell wie möglich bearbeiten!"
									data-aos="fade-up"
									align="left"
								/>
							</div>
						) : (
							<ContactForm />
						)}
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
