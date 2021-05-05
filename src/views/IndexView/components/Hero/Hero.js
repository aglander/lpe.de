import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
	fontWeight900: {
		fontWeight: 900,
		fontSize: '50px',
		[theme.breakpoints.down('md')]: {
			fontSize: '35px',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '30px',
		}
	},
	leftSideContent: {
		'& .section-header__cta-container': {
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
				'& .section-header__cta-item-wrapper': {
					width: '100%',
					'&:last-child': {
						marginLeft: 0,
						marginTop: theme.spacing(1),
					},
					'& .MuiButtonBase-root': {
						width: '100%',
					},
				},
			},
		},
	},
	heroShaped: {
		'& .hero-shaped__image': {
			backgroundColor: 'white',
			[theme.breakpoints.up('md')]: {
				display: 'grid',
				justifyContent: 'flex-end',
				'& .gatsby-image-wrapper': {
					width: '1000px'
				}
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

const Hero = ({ themeMode = 'light', className, ...rest }) => {
	const classes = useStyles();

	const title = (
		<Typography variant="h2" component="span" className={classes.fontWeight900}>
			Willkommen bei <br />
			Lars-Peter Eckhardt, Ihrem unabhängigen
			<br />
			<TypedText
				component="span"
				variant="h2"
				color="secondary"
				className={classes.fontWeight900}
				typedProps={{
					strings: [
						'Versicherungsmakler',
						'Finanzmakler',
						'Vorsorgeberater',
						'Generationenberater',
					],
					typeSpeed: 50,
					loop: true,
				}}
			/>
		</Typography>
	);

	const subtitle =
		'Wir beraten Sie sehr gerne persönlich, bei uns im Büro, vor Ort und selbstverständlich, für Sie besonders bequem, auch per Telefonberatung und Videoberatung.';

	const buyButton = (
		<Button
			size="large"
			variant="contained"
			color="primary"
			component={Link}
			to="/kontakt"
		>
			Kontakt aufnehmen
		</Button>
	);

	const leftSideContent = (
		<SectionHeader
			title={title}
			subtitle={subtitle}
			align="left"
			titleProps={{
				variant: 'h2',
				color: 'textPrimary',
			}}
			ctaGroup={[buyButton]}
			data-aos="fade-right"
			disableGutter
			className={classes.leftSideContent}
		/>
	);
	return (
		<div className={className} {...rest}>
			<HeroShaped
				className={classes.heroShaped}
				leftSide={leftSideContent}
				rightSide={
					<StaticImage
						src="../../../../assets/images/LPE_Start.jpg"
						alt="Lars-Peter Eckhardt"
						placeholder="blurred"
						layout="fullWidth"
					/>
				}
			/>
		</div>
	);
};

Hero.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * Theme mode
	 */
	themeMode: PropTypes.string,
};

export default Hero;
