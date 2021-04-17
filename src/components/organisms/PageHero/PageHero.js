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

	const ctas = [];

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

	if (slug.endsWith('-vergleichen')) {
		const backUrl = '/' + slug.split('-vergleichen')[0];
		ctas.push(
			<Link to={backUrl}>
				<Button
					variant="outlined"
					color="primary"
					size={isMd ? 'large' : 'medium'}
				>
					&larr; zurück
				</Button>
			</Link>
		);
	}

	ctas.push(
		<Link to="/kontakt">
			<Button
				variant="contained"
				color="primary"
				size={isMd ? 'large' : 'medium'}
			>
				Kontakt aufnehmen
			</Button>
		</Link>
	);

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
