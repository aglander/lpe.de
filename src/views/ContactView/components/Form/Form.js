import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { HeroShaped, ContactForm } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { StaticImage } from 'gatsby-plugin-image';

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
	success: {
		color: theme.palette.primary.main
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
	heroShaped: {
		'& .hero-shaped__image': {
			backgroundColor: 'white',
			[theme.breakpoints.up('md')]: {
				display: 'grid',
				justifyContent: 'flex-end',
				'& .gatsby-image-wrapper': {
					width: '1000px',
				},
			},
		},

		[theme.breakpoints.down('sm')]: {
			'& .hero-shaped__image': {
				position: 'relative',
			},
			'& .hero-shaped__wrapper': {
				flexDirection: 'column',
			},
		},
	},
}));

const Form = (props) => {
	const { data, className, ...rest } = props;
	const classes = useStyles();
	const theme = useTheme();

	const showSuccessScreen = data.data;

	return (
		<div className={className} {...rest}>
			<HeroShaped
				className={classes.heroShaped}
				leftSide={
					<div className={classes.heroleftSide}>
						{showSuccessScreen ? (
							<div>
								<SectionHeader
									title="Erfolgreich abgeschickt"
									subtitle="Vielen Dank für Ihre Nachricht. Wir werden Ihre Anfrage so schnell wie möglich bearbeiten!"
									data-aos="fade-up"
									align="left"
									titleClasses={classes.success}
								/>
							</div>
						) : (
							<ContactForm />
						)}
					</div>
				}
				rightSide={
					<StaticImage
						src="../../../../assets/images/kontakt-karte.png"
						alt="Karte"
						placeholder="blurred"
						layout="fullWidth"
					/>
				}
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
