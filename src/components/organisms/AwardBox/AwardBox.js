import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Typography, List, ListItem } from '@material-ui/core';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	award: {
		display: 'inline-block',
		width: 'auto',
		paddingRight: '10px',
	},
	root: {
		borderColor: theme.palette.alternate.dark,
		borderWidth: '1px',
		borderStyle: 'solid',
		borderRadius: theme.spacing(2),
		background: theme.palette.alternate.main,
		marginBottom: '30px',
		padding: '40px',
		textAlign: 'center'
	},
}));

const AwardBox = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography component="p" variant="h6">
				Seit 2011 wird LPE | Lars-Peter Eckhardt
				ununterbrochen durch die unabhängige Bewertungsplattform{' '}
				<Typography
					component="a"
					variant="h6"
					color="primary"
					href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
					target="_blank"
				>
					WhoFinance.de 
				</Typography>{' '}
				als einer der Top Berater in Deutschland ausgezeichnet.
			</Typography>
			<List>
				<ListItem disableGutters="true" className={classes.award}>
					<Link
						href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
						target="_blank"
					>
						<StaticImage
							src="../../../data/assets/Auszeichnung_aktuell_1.png"
							alt="Auszeichnung 1"
							placeholder="blurred"
							layout="fixed"
							width={200}
							height={92}
						/>
					</Link>
				</ListItem>
				<ListItem disableGutters="true" className={classes.award}>
					<Link
						href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
						target="_blank"
					>
						<StaticImage
							src="../../../data/assets/Auszeichnung_aktuell_2.png"
							alt="Auszeichnung 2"
							placeholder="blurred"
							layout="fixed"
							width={200}
							height={92}
						/>
					</Link>
				</ListItem>
				<ListItem disableGutters="true" className={classes.award}>
					<Link
						href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
						target="_blank"
					>
						<StaticImage
							src="../../../data/assets/Auszeichnung_aktuell_3.png"
							alt="Auszeichnung 3"
							placeholder="blurred"
							layout="fixed"
							width={200}
							height={92}
						/>
					</Link>
				</ListItem>
				<ListItem disableGutters="true" className={classes.award}>
					<Link
						href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
						target="_blank"
					>
						<StaticImage
							src="../../../data/assets/Auszeichnung_aktuell_4.png"
							alt="Auszeichnung 4"
							placeholder="blurred"
							layout="fixed"
							width={200}
							height={92}
						/>
					</Link>
				</ListItem>
				<ListItem disableGutters="true" className={classes.award}>
					<Link
						href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
						target="_blank"
					>
						<StaticImage
							src="../../../data/assets/Auszeichnung_aktuell_5.png"
							alt="Auszeichnung 5"
							placeholder="blurred"
							layout="fixed"
							width={200}
							height={92}
						/>
					</Link>
				</ListItem>
				<ListItem disableGutters="true" className={classes.award}>
					<Link
						href="https://www.whofinance.de/berater/lars-peter-eckhardt/"
						target="_blank"
					>
						<StaticImage
							src="../../../data/assets/Auszeichnung_aktuell_6.png"
							alt="Auszeichnung 6"
							placeholder="blurred"
							layout="fixed"
							width={200}
							height={92}
						/>
					</Link>
				</ListItem>
			</List>
		</div>
	);
};

export default AwardBox;
