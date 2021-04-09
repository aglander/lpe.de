import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Button, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
	heroShaped: {
		'& .hero-shaped__image': {
			backgroundColor: theme.palette.alternate.main,
			display: 'grid',
			justifyContent: 'flex-end',
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

const PageHero = (props) => {
	const {
		className,
		title,
		claim,
		description,
		slug,
		compare,
		image,
		...rest
	} = props;

	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const ctas = [
		<Link to="/kontakt">
			<Button
				variant="contained"
				color="primary"
				size={isMd ? 'large' : 'medium'}
			>
				Kontakt aufnehmen
			</Button>
		</Link>,
	];

	if (compare) {
		ctas.push(
			<Link to={compare}>
				<Button
					variant="outlined"
					color="primary"
					size={isMd ? 'large' : 'medium'}
				>
					Selber vergleichen
				</Button>
			</Link>
		);
	}

	return (
		<div className={className} {...rest}>
			<HeroShaped
				className={classes.heroShaped}
				leftSide={
					<SectionHeader
						title={
							<span>
								{title}{' '}
								<Typography component="span" variant="inherit" color="primary">
									{claim}
								</Typography>
							</span>
						}
						subtitle={description}
						ctaGroup={ctas}
						align="left"
						titleVariant="h3"
					/>
				}
				rightSide={<GatsbyImage image={getImage(image)} alt={title} />}
			/>
		</div>
	);
};

PageHero.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
};

export default PageHero;
