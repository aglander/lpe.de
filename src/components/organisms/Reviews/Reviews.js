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
	},
	root: {
		marginBottom: '40px',
		hyphens: 'auto',
	},
	headline: {
		maxWidth: '880px',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
}));

const data = [
	{
		authorPhoto:
			'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
		authorName: 'Sarah Herbeler',
		authorOccupation: 'Hausfinanzierung und Versicherungsvergleich mit Extras',
		feedback:
			'Wir haben über Herrn Eckhardt unser Haus finanziert und auch die vorhandenen Versicherungen an die neue Situation angepasst. Die Vorsorgevollmacht und Patientenverfügung geben uns ein gutes Gefühl.',
	},
	{
		authorPhoto: '../../../assets/images/Review2.jpg',
		authorName: 'Arian Glander',
		authorOccupation: 'Versicherungen und Finanzierung',
		feedback:
			'Seit 2 Jahrzehnten vertraue ich Lars-Peter Eckhardt wenn es um Versicherungen oder Finanzierungen geht. Er geht sehr gut auf meine Bedürfnisse ein und findet immer die richtige Lösung. Ich kann ihn uneingeschränkt und jederzeit weiterempfehlen.',
	},
	{
		authorPhoto:
			'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
		authorName: 'Ronny Reimer',
		authorOccupation: 'Hauskauf',
		feedback:
			'Individuelle, fachlich kompetente Beratung. Nimmt sich viel Zeit und geht auf die speziellen Bedürfnisse ein. Endlich mal ein Berater, der einen nicht nur mit Fachbegriffen verunsichert. Fragen wurden ausführlich und verständlich beantwortet. Gern wieder.',
	},
];

const Reviews = (props) => {
	const { className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={classes.root} data-aos="fade-up" {...rest}>
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
						<Typography color="secondary" variant="inherit" component="span">
							Wir beraten besser
						</Typography>{' '}
						– finden unsere Kunden
					</span>
				}
				subtitle="Wir haben auf allen gängigen Bewertungsportalen ausnahmslos positive Rückmeldungen erhalten. Dies ist für uns Ehre und Anspruch zugleich."
				fadeUp
				className={classes.headline}
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
					<a
						href="https://www.provenexpert.com/de-de/lars-peter-eckhardt"
						target="_blank"
					>
						<StaticImage
							src="../../../assets/images/provenexpert-logo.png"
							alt="ProvenExpert"
							placeholder="tracedSVG"
							layout="fixed"
							width={131}
							height={36}
							className={classes.logo}
						/>
					</a>
					<a
						href="https://www.whofinance.de/berater/lars-peter-eckhardt"
						target="_blank"
					>
						<StaticImage
							src="../../../assets/images/whofinance-logo.jpg"
							alt="WhoFinance"
							placeholder="tracedSVG"
							layout="fixed"
							width={118}
							height={36}
							className={classes.logo}
						/>
					</a>
					<a href="https://g.page/LPE99?share" target="_blank">
						<StaticImage
							src="../../../assets/images/google-logo.png"
							alt="Google"
							placeholder="tracedSVG"
							layout="fixed"
							width={106}
							height={36}
							className={classes.logo}
						/>
					</a>
					<a
						href="https://www.kennstdueinen.de/finanzdienstleistungen-woltersdorf-lars-peter-eckhardt-versicherungsmakler-finanzmakler-d150186.html"
						target="_blank"
					>
						<StaticImage
							src="../../../assets/images/kennstdueinen-logo.png"
							alt="Google"
							placeholder="tracedSVG"
							layout="fixed"
							width={131}
							height={36}
							className={classes.logo}
						/>
					</a>
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
};

export default Reviews;
