import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
	fontWeight900: {
		fontWeight: 900,
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
			backgroundColor: theme.palette.alternate.main,
			display: 'flex',
        	justifyContent: 'flex-end'
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
			Willkommen bei Ihrem unabhängigen
			<br />
			<TypedText
				component="span"
				variant="h2"
				color="secondary"
				className={classes.fontWeight900}
				typedProps={{
					strings: [
						'Versicherungsm',
						'Finanzmakler',
						'Vorsorgeb',
						'Generationsb',
					],
					typeSpeed: 50,
					loop: true,
				}}
			/>
		</Typography>
	);

	const subtitle =
		'Ich berate Sie gerne persönlich, bei uns im Büro, bei Ihnen vor Ort und selbstverständlich, für Sie besonders bequem, auch per Telefon und Videoberatung.';

	const docsButton = (
		<Button
			size="large"
			variant="outlined"
			color="primary"
			component="a"
			href="/documentation"
		>
			Über uns
		</Button>
	);

	const buyButton = (
		<Button
			size="large"
			variant="contained"
			color="primary"
			component="a"
			href="/home"
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
			ctaGroup={[docsButton, buyButton]}
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
						layout="fixed"
						width={1000}
						height={667}
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
