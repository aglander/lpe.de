import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography, colors } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardReview } from 'components/organisms';
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles(() => ({
	sectionHeadlineStars: {
		maxWidth: 120,
	},
  logo: {
    margin: '0 40px',
    filter: 'grayscale(100%)',
    '&:hover': {
      filter: 'grayscale(0%)',
    },
  }
}));

const Reviews = (props) => {
	const { data, className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const imageOptions = { rotate: '90' };

	return (
		<div className={className} data-aos="fade-up" {...rest}>
			<SectionHeader
				overline={
					<Image
						src="https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png"
						alt="rating"
						className={classes.sectionHeadlineStars}
						width="auto"
					/>
				}
				title={
					<span>
						Unsere Kunden bewerten uns mit{' '}
						<Typography color="secondary" variant="inherit" component="span">
							5 von 5 Sternen
						</Typography>
					</span>
				}
				subtitle="Wir haben auf allen gängigen Bewertungsportalen ausnahmslos positive Rückmeldungen erhalten. Dies ist für uns Ehre und Anspruch zugleich."
				fadeUp
			/>
			<Grid container spacing={isMd ? 4 : 2}>
				{data.map((review, index) => (
					<Grid
						key={index}
						item
						container
						alignItems="center"
						direction="column"
						xs={12}
						sm={12}
						md={4}
						data-aos="fade-up"
					>
						<CardReview
							variant="outlined"
							text={review.feedback}
							icon={
								<IconAlternate
									color={colors.green}
									fontIconClass="fas fa-quote-right"
								/>
							}
							authorName={review.authorName}
							authorTitle={review.authorOccupation}
							authorPhoto={review.authorPhoto}
						/>
					</Grid>
				))}
				<Grid item container xs={12} justify="center">
					<StaticImage
						src="../../../assets/images/provenexpert-logo.png"
						alt="ProvenExpert"
						placeholder="tracedSVG"
						layout="fixed"
						width={131}
						height={36}
            className={classes.logo}
					/>
          <StaticImage
						src="../../../assets/images/whofinance-logo.jpg"
						alt="WhoFinance"
						placeholder="tracedSVG"
						layout="fixed"
						width={118}
						height={36}
            className={classes.logo}
					/>
          <StaticImage
						src="../../../assets/images/google-logo.png"
						alt="WhoFinance"
						placeholder="tracedSVG"
						layout="fixed"
						width={106}
						height={36}
            className={classes.logo}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

Reviews.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	data: PropTypes.array.isRequired,
};

export default Reviews;
