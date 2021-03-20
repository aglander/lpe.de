import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	colors,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemAvatar,
	Avatar,
	useMediaQuery,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2),
		border: `1px solid ${colors.grey[200]}`,
		borderRadius: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(3),
		},
	},
	gridItem: {
		marginBottom: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		borderBottom: `1px solid ${colors.grey[200]}`,
		'&:last-child': {
			marginBottom: 0,
			borderBottom: 0,
			paddingBottom: 0,
		},
	},
	cardProduct: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		boxShadow: 'none',
		borderRadius: 0,
		'& .card-product__content': {
			padding: 0,
			paddingLeft: theme.spacing(2),
		},
		'& .card-product__media': {
			height: 90,
			width: 90,
			'& img': {
				height: 90,
				width: 90,
			},
		},
	},
	image: {
		objectFit: 'cover',
	},
	blogContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
	},
	blogTitle: {
		fontWeight: 700,
	},
	tags: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	tag: {
		margin: theme.spacing(0, 1 / 2, 1 / 2, 0),
		textTransform: 'uppercase',
		fontWeight: 700,
	},
	sectionTitle: {
		fontWeight: 'bold',
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(3),
		},
	},
	avatar: {
		right: '18px',
		width: '60px',
		height: '60px',
		paddingTop: '20px'
	},
	contactPanel: {
		background: theme.palette.background.footer,
		color: theme.palette.common.white,
	},
	icon: {
		color: 'rgba(255,255,255,1)',
	},
}));

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

const ContactPanel = () => {
	const classes = useStyles();

	const theme = useTheme();

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={clsx(classes.root, classes.contactPanel)}>
			<List aria-label="contacts">
				<ListItem className={classes.listItem}>
					<ListItemAvatar className={classes.listItemAvatar}>
						<Avatar className={classes.avatar}>
							<StaticImage
								src="../../../assets/images/LPE_HP.jpg"
								alt="Lars-Peter Eckhardt"
								placeholder="blurred"
								layout="fixed"
								width={60}
								height={80}
							/>
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						className={classes.listItemText}
						primary="Lars-Peter Eckhardt"
						secondary="Versicherungsmakler & Finanzmakler"
						primaryTypographyProps={{
							className: classes.title,
							variant: 'h6',
							align: isMd ? 'left' : 'center',
						}}
						secondaryTypographyProps={{
							color: theme.palette.common.white,
							align: isMd ? 'left' : 'center',
						}}
					/>
				</ListItem>
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
		</div>
	);
};

ContactPanel.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
};

export default ContactPanel;
