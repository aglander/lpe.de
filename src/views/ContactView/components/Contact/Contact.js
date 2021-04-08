import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	useMediaQuery,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Grid,
	Button,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import VideoCallIcon from '@material-ui/icons/VideoCall';

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	list: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		[theme.breakpoints.up('md')]: {
			alignItems: 'center',
		},
	},
	listItemText: {},
	listItem: {
		width: '300px',
	},
	icon: {
		background: theme.palette.primary.main,
		color: 'white',
		borderRadius: '50%',
		padding: '10px',
		fontSize: '3em',
	},
	video: {
		textAlign: 'center'
	},
	videoIcon: {
		color: 'grey',
		padding: '10px',
		fontSize: '20em',
		display: 'block',
		width: '100%'
	},
}));

const Contact = (props) => {
	const { className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={className} {...rest}>
			<Grid container spacing={isMd ? 4 : 2}>
				<Grid item xs={isMd ? 6 : 12} data-aos="fade-up">
					<SectionHeader
						title="Kontaktdaten"
						subtitle="Our contact details. We carefully read and answer to all your questions."
						data-aos="fade-up"
						align={isMd ? 'center' : 'left'}
					/>
					<List disablePadding className={classes.list}>
						<ListItem className={classes.listItem}>
							<ListItemIcon>
								<LocationOnIcon className={classes.icon} />
							</ListItemIcon>
							<ListItemText
								primary="Lerchenstraße 40"
								secondary="15569 Woltersdorf"
								secondaryTypographyProps={{
									color: theme.palette.common.white,
									variant: 'body1',
									align: isMd ? 'left' : 'center',
								}}
							/>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemLink disableGutters href="tel:01723829922">
								<ListItemIcon>
									<SmartphoneIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="0172 3829922" />
							</ListItemLink>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemLink disableGutters href="tel:033627000251">
								<ListItemIcon>
									<PhoneIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="03362 7000-250" />
							</ListItemLink>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemLink disableGutters href="mailto:LPE@LPE.de">
								<ListItemIcon>
									<EmailIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="LPE@LPE.de" />
							</ListItemLink>
						</ListItem>
					</List>
				</Grid>
				<Grid item xs={6} data-aos="fade-up">
					<SectionHeader
						title="Videoberatung"
						subtitle="Wie ist die eigentlich genau gedacht Lars?"
						data-aos="fade-up"
						align={isMd ? 'center' : 'left'}
					/>
					<div className={classes.video}>
						<a
							href="https://fondsfinanz.br-idge.de/public/room.a?key=LPE&skipCheck=true"
							target="_blank"
							rel="noreferrer"
						>
							<VideoCallIcon className={classes.videoIcon} />
						</a>
						<Button
							variant="contained"
							color="primary"
							component="a"
							href="https://fondsfinanz.br-idge.de/public/room.a?key=LPE&skipCheck=true"
							target="_blank"
							rel="noreferrer"
						>
							Jetzt Starten
						</Button>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

Contact.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
};

export default Contact;
