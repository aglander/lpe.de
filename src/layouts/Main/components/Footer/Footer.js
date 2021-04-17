import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	IconButton,
	Grid,
	List,
	ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Link } from 'gatsby';
import logo from 'assets/images/LPE_Logo_single_weiss.svg';

import { Image } from 'components/atoms';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(6, 0),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(12, 0),
		},
		background: theme.palette.background.footer,
	},
	footerContainer: {
		maxWidth: theme.layout.contentWidth,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 8),
		},
	},
	logoContainerItem: {
		paddingTop: 0,
	},
	logoContainer: {
		width: 120,
		height: 32,
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
	groupTitle: {
		textTransform: 'uppercase',
		color: theme.palette.primary.dark,
		marginBottom: theme.spacing(1),
	},
	socialIcon: {
		padding: 0,
		marginRight: theme.spacing(1),
		color: 'rgba(255,255,255,.6)',
		'&:hover': {
			background: 'transparent',
		},
		'&:last-child': {
			marginRight: 0,
		},
	},
	icon: {
		fontSize: 24,
	},
	menuListContainer: {
		padding: '0 !important',
	},
	menu: {
		display: 'flex',
	},
	menuItem: {
		margin: theme.spacing(2),
		'&:last-child': {
			marginBottom: 0,
		},
	},
	menuGroupItem: {
		paddingTop: 0,
		paddingBottom: theme.spacing(1 / 2),
		'&:last-child': {
			paddingBottom: 0,
		},
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
		color: 'white',
	},
	divider: {
		width: '100%',
	},
	navLink: {
		color: 'rgba(255,255,255,.8)',
	},
	iframe: {
		height: '71px',
		width: '100%',
		border: 0,
		overflow: 'hidden',
		display: 'block',
		position: 'fixed',
		bottom: '0',
		zIndex: '999',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
}));

const Footer = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<iframe
				src="/whofinance-footer.html"
				className={classes.iframe}
				title="WhoFinance Footer"
			/>
			<div className={classes.footerContainer}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={2}>
						<List disablePadding>
							<ListItem disableGutters className={classes.logoContainerItem}>
								<div className={classes.logoContainer}>
									<a href="/" title="LPE">
										<Image
											className={classes.logoImage}
											src={logo}
											alt="LPE.de"
											lazy={false}
										/>
									</a>
								</div>
							</ListItem>
							<ListItem disableGutters>
								<IconButton className={classes.socialIcon}>
									<FacebookIcon className={classes.icon} />
								</IconButton>
								<IconButton className={classes.socialIcon}>
									<InstagramIcon className={classes.icon} />
								</IconButton>
								<IconButton className={classes.socialIcon}>
									<TwitterIcon className={classes.icon} />
								</IconButton>
								<IconButton className={classes.socialIcon}>
									<PinterestIcon className={classes.icon} />
								</IconButton>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12} md={10} className={classes.menuListContainer}>
						<Grid container spacing={10}>
							<Grid item>
								<ul>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/impressum"
											className={clsx(classes.navLink)}
										>
											Altersvorsorge
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/datenschutz"
											className={clsx(classes.navLink)}
										>
											Versicherungen
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/kontakt"
											className={clsx(classes.navLink)}
										>
											Finanzierungen
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/ortsverzeichnis"
											className={clsx(classes.navLink)}
										>
											Immobilien
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/ortsverzeichnis"
											className={clsx(classes.navLink)}
										>
											Liebe Familie
										</Typography>
									</li>
								</ul>
							</Grid>
							<Grid item>
								<ul>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/ueber-uns"
											className={clsx(classes.navLink)}
										>
											Über uns
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/downloads"
											className={clsx(classes.navLink)}
										>
											Downloads
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/kontakt"
											className={clsx(classes.navLink)}
										>
											Kontakt
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/ortsverzeichnis"
											className={clsx(classes.navLink)}
										>
											Ortsverzeichnis
										</Typography>
									</li>
								</ul>
							</Grid>
							<Grid item>
								<ul>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/impressum"
											className={clsx(classes.navLink)}
										>
											Impressum
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/datenschutz"
											className={clsx(classes.navLink)}
										>
											Datenschutz
										</Typography>
									</li>
									<li>
										<Typography
											variant="body1"
											component={Link}
											to="/erstinformation"
											className={clsx(classes.navLink)}
										>
											Erstinformation
										</Typography>
									</li>
								</ul>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
