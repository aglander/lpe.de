import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Button, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const ctas = [
		<Button
			variant="contained"
			color="primary"
			size={isMd ? 'large' : 'medium'}
		>
			Kontakt aufnehmen
		</Button>,
	];
	
	if (compare) {
		ctas.push(
			<Button
				variant="outlined"
				color="primary"
				size={isMd ? 'large' : 'medium'}
				href={`/${slug}-vergleichen`}
			>
				Selber vergleichen
			</Button>
		);
	}

	return (
		<div className={className} {...rest}>
			<HeroShaped
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
				rightSide={
					<GatsbyImage image={getImage(image)} alt={title} />
				}
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
