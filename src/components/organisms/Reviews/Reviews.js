import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import {
	Grid,
	Typography,
	colors,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
} from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, ProvenExpert } from 'components/organisms';
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
	stars: {
		color: '#ffbb00',
		'& i': {
			fontSize: '2em',
		},
	},
}));

const Reviews = (props) => {
	const { className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});
	let align = 'center';
	let justifyGrid = 'center';
	if (align === 'left') {
		justifyGrid = 'flex-start';
	} else if (align === 'right') {
		justifyGrid = 'flex-end';
	}

	return (
		<div className={classes.root} data-aos="fade-up" {...rest}>
			<SectionHeader
				overline={
					<div className={classes.stars}>
						<Icon fontIconClass="fas fa-star" />
						<Icon fontIconClass="fas fa-star" />
						<Icon fontIconClass="fas fa-star" />
						<Icon fontIconClass="fas fa-star" />
						<Icon fontIconClass="fas fa-star" />
					</div>
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
			<ProvenExpert wide />
			<Grid container spacing={isMd ? 4 : 2}>
				<Grid
					key={0}
					item
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={12}
					md={4}
					data-aos="fade-up"
				>
					<CardBase className={clsx('card-review')} variant="outlined" liftUp>
						<Grid container spacing={2} className="card-review__wrapper">
							<Grid
								item
								container
								justify={justifyGrid}
								xs={12}
								className="card-review__icon-wrapper"
							>
								<IconAlternate
									color={colors.green}
									fontIconClass="fas fa-quote-right"
								/>
							</Grid>
							<Grid item xs={12} className="card-review__text-wrapper">
								<Typography variant="h6" align={align} component="p">
									Wir haben über Herrn Eckhardt unser Haus finanziert und auch
									die vorhandenen Versicherungen an die neue Situation
									angepasst. Die Vorsorgevollmacht und Patientenverfügung geben
									uns ein gutes Gefühl.
								</Typography>
							</Grid>
							<Grid item xs={12} className="card-review__lits-container">
								<Grid
									container
									justify={justifyGrid}
									className="card-review__list-wrapper"
								>
									<List disablePadding className="card-review__list">
										<ListItem className="card-review__list-item">
											<ListItemAvatar className="card-review__list-item-avatar">
												<Avatar className="card-review__avatar">
													<StaticImage
														alt="Steffi Richter"
														src="../../../assets/images/Review1.png"
														placeholder="blurred"
														layout="fixed"
														width={40}
														height={40}
													/>
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												className="card-review__list-item-text"
												primary="Steffi Richter"
												secondary="Hausbau"
											/>
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Grid>
					</CardBase>
				</Grid>

				<Grid
					key={0}
					item
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={12}
					md={4}
					data-aos="fade-up"
				>
					<CardBase className={clsx('card-review')} variant="outlined" liftUp>
						<Grid container spacing={2} className="card-review__wrapper">
							<Grid
								item
								container
								justify={justifyGrid}
								xs={12}
								className="card-review__icon-wrapper"
							>
								<IconAlternate
									color={colors.green}
									fontIconClass="fas fa-quote-right"
								/>
							</Grid>
							<Grid item xs={12} className="card-review__text-wrapper">
								<Typography variant="h6" align={align} component="p">
									Seit 2 Jahrzehnten vertraue ich Lars-Peter Eckhardt wenn es um
									Versicherungen oder Finanzierungen geht. Er geht sehr gut auf
									meine Bedürfnisse ein und findet immer die richtige Lösung.
									Ich kann ihn uneingeschränkt und jederzeit weiterempfehlen.
								</Typography>
							</Grid>
							<Grid item xs={12} className="card-review__lits-container">
								<Grid
									container
									justify={justifyGrid}
									className="card-review__list-wrapper"
								>
									<List disablePadding className="card-review__list">
										<ListItem className="card-review__list-item">
											<ListItemAvatar className="card-review__list-item-avatar">
												<Avatar className="card-review__avatar">
													<StaticImage
														alt="Arian Glander"
														src="../../../assets/images/Review2.jpg"
														placeholder="blurred"
														layout="fixed"
														width={40}
														height={40}
													/>
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												className="card-review__list-item-text"
												primary="Arian Glander"
												secondary="Versicherungen und Finanzierung"
											/>
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Grid>
					</CardBase>
				</Grid>

				<Grid
					key={0}
					item
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={12}
					md={4}
					data-aos="fade-up"
				>
					<CardBase className={clsx('card-review')} variant="outlined" liftUp>
						<Grid container spacing={2} className="card-review__wrapper">
							<Grid
								item
								container
								justify={justifyGrid}
								xs={12}
								className="card-review__icon-wrapper"
							>
								<IconAlternate
									color={colors.green}
									fontIconClass="fas fa-quote-right"
								/>
							</Grid>
							<Grid item xs={12} className="card-review__text-wrapper">
								<Typography variant="h6" align={align} component="p">
									Individuelle, fachlich kompetente Beratung. Nimmt sich viel
									Zeit und geht auf die speziellen Bedürfnisse ein. Endlich mal
									ein Berater, der einen nicht nur mit Fachbegriffen
									verunsichert. Fragen wurden ausführlich und verständlich
									beantwortet. Gern wieder.
								</Typography>
							</Grid>
							<Grid item xs={12} className="card-review__lits-container">
								<Grid
									container
									justify={justifyGrid}
									className="card-review__list-wrapper"
								>
									<List disablePadding className="card-review__list">
										<ListItem className="card-review__list-item">
											<ListItemAvatar className="card-review__list-item-avatar">
												<Avatar className="card-review__avatar">
													JB
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												className="card-review__list-item-text"
												primary="Josefina Bils"
												secondary="Hausbau"
											/>
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Grid>
					</CardBase>
				</Grid>

				<Grid item container xs={12} justify="center">
					<a
						href="https://www.provenexpert.com/de-de/lars-peter-eckhardt"
						target="_blank"
						rel="noreferrer"
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
						rel="noreferrer"
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
					<a href="https://g.page/LPE99?share" target="_blank" rel="noreferrer">
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
						rel="noreferrer"
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
