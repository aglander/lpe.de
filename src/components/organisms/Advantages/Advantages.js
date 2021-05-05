import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexFlow: 'wrap',
		justifyContent: 'space-around',
	},

	box: {
		display: 'flex',
		maxWidth: '500px',
		padding: '20px',
	},
}));

const Advantages = (props) => {
	const { className, ...rest } = props;
	const theme = useTheme();
	const classes = useStyles();

	return (
		<div className={className} {...rest}>
			<SectionHeader
				title={
					<span>
						Sie haben Fragen und suchen Antworten?{' '}
						<Typography component="span" variant="inherit" color="primary">
							Wir bieten Ihnen Lösungen!
						</Typography>
					</span>
				}
				subtitle={
					<>
						Wenn Sie es erlauben, möchten wir Sie am liebsten möglichst lange
						begleiten. Daher sind unsere Beratungen langfristig und unsere
						Lösungen individuell an alle Ihre Lebensphasen angelehnt. Wir
						verbinden dabei im Optimalfall die folgenden 5 Bereiche in unserem{' '}
						<strong>
							<i>
								„Liebe-Familie-Rezept“ mit einem funktionierenden Notfallplan!
							</i>
						</strong>
					</>
				}
				fadeUp
			/>
			<div class={classes.container}>
				<div class={classes.box} data-aos="fade-up">
					<Link to="/altersvorsorge">
						<DescriptionListIcon
							title="Altersvorsorge"
							subtitle="Erhalten Sie Ihre finanzielle Unabhängigkeit im Alter! Mit einer guten Planung schaffen Sie die richtige Balance zwischen jetzt gut leben, für später sinnvoll investieren und im Ruhestand mit dem vorhandenen Kapital auskommen. Dafür liefern wir Ihnen die passenden Strategien in jeder Lebensphase!"
							icon={
								<Icon
									fontIconClass="fas fa-piggy-bank"
									size="medium"
									fontIconColor={theme.palette.primary.main}
								/>
							}
						/>
					</Link>
				</div>
				<div class={classes.box} data-aos="fade-up">
					<Link to="/versicherungen">
						<DescriptionListIcon
							title="Versicherungen"
							subtitle="Risiken richtig absichern! Von A - wie Arbeitskraftabsicherung, über F - wie Familienvorsorge und H - wie Heim- & Haus richtig schützen bis Z - wie Zusatzversicherungen. Viele Anbieter, viele Tarife – der Versicherungsdschungel undurchschaubar? Wir sorgen für die richtigen Absicherungen, zur richtigen Zeit!"
							icon={
								<Icon
									fontIconClass="fas fa-file-contract"
									size="medium"
									fontIconColor={theme.palette.primary.main}
								/>
							}
						/>
					</Link>
				</div>
				<div class={classes.box} data-aos="fade-up">
					<Link to="/finanzierungen">
						<DescriptionListIcon
							title="Finanzierungen"
							subtitle="Leben Sie sich Ihren Traum! Die Planung für Ihren ersten Hausbau oder der Kauf einer Immobilie, die anstehende Anschlussfinanzierung oder eine Sanierung / Modernisierung - mit individuell auf Sie ausgerichteten Finanzierungslösungen erreichen Sie Ihren Traum und behalten jederzeit die Kontrolle."
							icon={
								<Icon
									fontIconClass="fas fa-euro-sign"
									size="medium"
									fontIconColor={theme.palette.primary.main}
								/>
							}
						/>
					</Link>
				</div>
				<div class={classes.box} data-aos="fade-up">
					<Link to="/immobilien">
						<DescriptionListIcon
							title="Immobilien"
							subtitle="Immobilien als Kapitalanlage oder der Wunsch Ihre Immobilie zu verkaufen! Wir stellen Ihnen ein großes Portfolio attraktiver Immobilienangebote an verschiedenen Standorten in Deutschland zur Verfügung. Sie wollen oder müssen Ihre Immobilie verkaufen? Wir stellen den Kontakt zu ausgewählten Interessenten her! "
							icon={
								<Icon
									fontIconClass="fas fa-home"
									size="medium"
									fontIconColor={theme.palette.primary.main}
								/>
							}
						/>
					</Link>
				</div>
				<div class={classes.box} data-aos="fade-up">
					<Link to="/liebe-familie">
						<DescriptionListIcon
							title="Liebe Familie"
							subtitle="Das Wichtigste geregelt haben, die Harmonie in der Familie erhalten und Niemandem zur Last fallen! Patientenverfügung und Vorsorgevollmacht, Sorgerechtsverfügungen für Ihre Kinder, die Pflege der Eltern und deren Unterhalt, sowie der letzte Wille. Einmal geklärt und bei Bedarf angepasst, gibt es Ihnen ein rund um gutes Gefühl!"
							icon={
								<Icon
									fontIconClass="fas fa-heart"
									size="medium"
									fontIconColor={theme.palette.primary.main}
								/>
							}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

Advantages.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
};

export default Advantages;
