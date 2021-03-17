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
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	list: {
		width: '300px'
	},
	listItemText: {
		display: 'flex',
		flexDirection: 'column',
		flex: '0 0 auto',
	},
	listItem: {
		justifyContent: 'flex-start',
		[theme.breakpoints.up('md')]: {
			justifyContent: 'center',
		},
	},
	icon: {
		background: 'transparent',
		borderRadius: 0,
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
				<Grid item xs={6} data-aos="fade-up">
					<SectionHeader
						title="Kontaktdaten"
						subtitle="Our contact details. We carefully read and answer to all your questions."
						data-aos="fade-up"
						align={isMd ? 'center' : 'left'}
					/>
					<List disablePadding className={classes.list}>
						<ListItem>
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
						<ListItem>
							<ListItemLink disableGutters href="tel:01723829922">
								<ListItemIcon>
									<SmartphoneIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="(0172) 3 829 922" />
							</ListItemLink>
						</ListItem>
						<ListItem>
							<ListItemLink disableGutters href="tel:033627000251">
								<ListItemIcon>
									<PhoneIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="(0 33 62) 7000 251" />
							</ListItemLink>
						</ListItem>
						<ListItem>
							<ListItemLink disableGutters href="mailto:LPE@LPE.de">
								<ListItemIcon>
									<EmailIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="LPE@LPE.de" />
							</ListItemLink>
						</ListItem>
					</List>
				</Grid>
        <Grid item xs={6} data-aos="fade-up">Hallo</Grid>
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
