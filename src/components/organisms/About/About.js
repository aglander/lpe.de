import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import {
	Grid,
	Typography,
	useMediaQuery,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@material-ui/core';

import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.primary.main,
		fontSize: '2.5em',
	},
	photoWrapper: {
		borderRadius: '100%',
		height: '100px',
		width: '100px',
		display: 'inline-block',
		overflow: 'hidden',
		maskImage: 'radial-gradient(white, black)',
	},
	photoContainer: {
		justifyContent: 'center',
		marginBottom: '10px',
	},
}));

const About = () => {
	const theme = useTheme();
	const classes = useStyles();

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className="root">
			<Grid container className={classes.photoContainer}>
				<div className={classes.photoWrapper}>
					<StaticImage
						src="../../../assets/images/LPE_HP.jpg"
						alt="Lars-Peter Eckhardt"
						placeholder="blurred"
						layout="constrained"
						width={100}
						height={133}
						className={classes.photo}
					/>
				</div>
			</Grid>
			<SectionHeader
				title="LPE | Lars-Peter Eckhardt"
				subtitle="Als mehrfach ausgezeichneter, unabhängiger Versicherungsmakler & Finanzmakler ist es mein Anspruch, Sie gut zu beraten, gut zu betreuen und möglichst sehr, sehr lange mit Ihnen zusammenzuarbeiten. Mein Team und ich stehen dafür an Ihrer Seite."
				fadeUp
			/>
			<Grid container spacing={isMd ? 4 : 2}>
				<Grid
					item
					container
					alignItems="center"
					xs={12}
					md={6}
					data-aos="fade-up"
					key={0}
				>
					<CardBase variant="outlined" liftUp>
						<Grid item xs={12}>
							<Typography variant="h5" gutterBottom>
								Unsere Kriterien
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Divider />
						</Grid>
						<Grid item xs={12}>
							<List className="">
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Unabhängigkeit"
										secondary="Als Versicherungsmakler nach §34d GewO bin ich sogar gesetzlich dazu verpflichtet, die Interessen unserer Kunden unabhängig wahrzunehmen."
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Kompetenz"
										secondary="Die Ausbildung als Fachwirt für Finanzberatung (IHK), Baufinanzierungsberater (IHK) und Generationenberater (IHK) gewährleistet eine ganzheitliche Beratung."
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Erfahrung"
										secondary="Nach ersten Erfahrungen bei einer Versicherungsgesellschaft, stieg mein eigener Anspruch an zufriedene Kunden. 1999 gab es den Startschuss für LPE."
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Vertrauen"
										secondary="Versicherungen sind (keine) Vertrauenssache. Seien Sie gerne kritisch, prüfen und fordern Sie uns. Viele hundert Kunden vertrauen uns seit vielen Jahren!"
									/>
								</ListItem>
							</List>
						</Grid>
					</CardBase>
				</Grid>
				<Grid
					item
					container
					alignItems="center"
					xs={12}
					md={6}
					data-aos="fade-up"
					key={1}
				>
					<CardBase variant="outlined" liftUp>
						<Grid item xs={12}>
							<Typography variant="h5" gutterBottom>
								Unser Beratungsansatz
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Divider />
						</Grid>
						<Grid item xs={12}>
							<List className="">
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Langfristig"
										secondary="Am liebsten betrachten wir unseren gemeinsamen Weg langfristig und in allen Lebensphasen. Das bedeutet mehr Planungssicherheit für Sie!"
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Unabhängig"
										secondary="Eine geeignet große Auswahl verschiedener Versicherungsgesellschaften, über 400 Banken und Bausparkassen sichert Ihnen ein breites Angebot!"
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Ganzheitlich"
										secondary="Eine vernünftige Analyse Ihrer aktuellen Lebenssituation, die Erfassung von Zielen und Wünschen ermöglicht uns die individuelle Gestaltung Ihrer Lösungen!"
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Icon
											className={clsx('fa fa-check-circle', classes.icon)}
										/>
									</ListItemAvatar>
									<ListItemText
										primary="Die „Extrameile“:"
										secondary="Ist unser „Liebe-Familie-Rezept“. Wir sind von der Notwendigkeit überzeugt und eröffnen Ihnen Lösungsmöglichkeiten die Sie begeistern!"
									/>
								</ListItem>
							</List>
						</Grid>
					</CardBase>
				</Grid>
			</Grid>
		</div>
	);
};

export default About;
