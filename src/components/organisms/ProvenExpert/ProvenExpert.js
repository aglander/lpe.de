import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		borderColor: theme.palette.alternate.dark,
		borderWidth: '1px',
		borderStyle: 'solid',
		borderRadius: theme.spacing(2),
		background: theme.palette.alternate.main,
		marginBottom: '30px',
		padding: '40px',
		textAlign: 'center',
	},
	lpe: {
		display: 'inline-block',
		borderWidth: '1px 0 1px 1px',
		borderStyle: 'solid',
		borderColor: '#e5e4dc',
	},
	provenExpert: {
		display: 'inline-block',
	},
	iframe: {
		width: '1000px',
		height: '234px',
		border: 0,
	},
}));

const ProvenExpert = (props) => {
	const { wide } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{wide ? (
				<div>
					<Hidden mdDown>
						<iframe
							src="/provenexpert.html"
							className={classes.iframe}
							title="ProvenExpert"
						/>
					</Hidden>
					<Hidden smDown lgUp>
						<a
							href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
							title="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
							target="_blank"
							rel="noreferrer"
						>
							<StaticImage
								src="../../../assets/images/LPE_HP.jpg"
								alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
								placeholder="blurred"
								layout="fixed"
								width={176}
								height={234}
								className={classes.lpe}
							/>
						</a>
					</Hidden>
					<Hidden xsDown lgUp>
						<a
							href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
							title="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
							target="_blank"
							rel="noreferrer"
						>
							<StaticImage
								src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_recommendation_465_0.png?t=1617907167857"
								alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
								placeholder="blurred"
								layout="fixed"
								width={465}
								height={234}
								className={classes.provenExpert}
							/>
						</a>
					</Hidden>
					<Hidden smUp>
						<a
							href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
							title="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
							target="_blank"
							rel="noreferrer"
						>
							<StaticImage
								src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_landscape_280_de_0.png"
								alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
								placeholder="blurred"
								layout="fixed"
								width={280}
								height={233}
								className={classes.provenExpert}
							/>
						</a>
					</Hidden>
				</div>
			) : (
				<a
					href="https://www.provenexpert.com/lars-peter-eckhardt/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
					title="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
					target="_blank"
					rel="noreferrer"
				>
					<Hidden mdDown>
						<StaticImage
							src="../../../assets/images/LPE_HP.jpg"
							alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
							placeholder="blurred"
							layout="fixed"
							width={176}
							height={234}
							className={classes.lpe}
						/>
					</Hidden>
					<Hidden xsDown>
						<StaticImage
							src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_recommendation_465_0.png?t=1617907167857"
							alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
							placeholder="blurred"
							layout="fixed"
							width={465}
							height={234}
							className={classes.provenExpert}
						/>
					</Hidden>
					<Hidden smUp>
						<StaticImage
							src="https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/widget_landscape_280_de_0.png"
							alt="Kundenbewertungen &amp; Erfahrungen zu Lars-Peter Eckhardt. Mehr Infos anzeigen."
							placeholder="blurred"
							layout="fixed"
							width={280}
							height={233}
							className={classes.provenExpert}
						/>
					</Hidden>
				</a>
			)}
		</div>
	);
};

export default ProvenExpert;
