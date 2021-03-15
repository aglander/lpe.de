import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
	Toolbar,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	Popover,
	Typography,
	Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Image } from 'components/atoms';
import { useStaticQuery, graphql } from 'gatsby';

import logo from 'assets/images/LPE_Logo.svg';

const useStyles = makeStyles((theme) => ({
	flexGrow: {
		flexGrow: 1,
	},
	navigationContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	toolbar: {
		zIndex: 999,
		maxWidth: theme.layout.contentWidth,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 8),
		},
	},
	navLink: {
		'&:hover': {
			color: theme.palette.primary.dark,
		},
	},
	listItem: {
		cursor: 'pointer',
		'&:hover > .menu-item, &:hover svg': {
			color: theme.palette.primary.dark,
		},
		'&.menu-item--no-dropdown': {
			paddingRight: 0,
		},
	},
	listItemActive: {
		'&> .menu-item': {
			color: theme.palette.primary.dark,
		},
	},
	listItemText: {
		flex: '0 0 auto',
		marginRight: theme.spacing(2),
		whiteSpace: 'nowrap',
	},
	listItemButton: {
		whiteSpace: 'nowrap',
	},
	listItemIcon: {
		minWidth: 'auto',
	},
	popover: {
		padding: theme.spacing(4),
		border: theme.spacing(2),
		boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
		minWidth: 350,
		marginTop: theme.spacing(2),
	},
	iconButton: {
		marginLeft: theme.spacing(2),
		padding: 0,
		'&:hover': {
			background: 'transparent',
		},
	},
	expandOpen: {
		transform: 'rotate(180deg)',
		color: theme.palette.primary.dark,
	},
	logoContainer: {
		width: 100,
		height: 28,
		[theme.breakpoints.up('md')]: {
			width: 120,
			height: 32,
		},
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
	menu: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuItem: {
		marginRight: theme.spacing(5),
		'&:last-child': {
			marginRight: 0,
		},
	},
	menuGroupItem: {
		paddingTop: 0,
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
	},
}));

const Topbar = ({
	themeMode,
	themeToggler,
	onSidebarOpen,
	className,
	...rest
}) => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);
	const [openedPopoverId, setOpenedPopoverId] = useState(null);

	const handleClick = (event, popoverId) => {
		setAnchorEl('event.target');
		setOpenedPopoverId(popoverId);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpenedPopoverId(null);
	};

	const Navigation = () => {
		const {
			site: {
				siteMetadata: { navigation },
			},
		} = useStaticQuery(graphql`
			{
				site {
					siteMetadata {
						navigation {
							title
							id
							parent
							url
						}
					}
				}
			}
		`);

		const renderSubMenu = (id) => {
			const subMenu = navigation
				.filter((navItem) => navItem.parent === id)
				.map((navItem) => {
					if (navItem.url) {
						return (
							<ListItem
								disableGutters
								key={navItem.id}
								className={classes.menuGroupItem}
							>
								<Typography
									variant="body1"
									component={'a'}
									href={navItem.url}
									className={clsx(classes.navLink, 'submenu-item')}
									color="textSecondary"
									onClick={handleClose}
								>
									{navItem.title}
								</Typography>
							</ListItem>
						);
					} else {
						return (
							<List disablePadding>
								<ListItem disableGutters>
									<Typography
										variant="body2"
										color="primary"
										className={classes.menuGroupTitle}
									>
										{navItem.title}
									</Typography>
								</ListItem>
								<div>{renderSubMenu(navItem.id)}</div>
							</List>
						);
					}
				});
			return (
				<div className={classes.menu}>
					<div className={classes.menuItem}>
						<List disablePadding>{subMenu}</List>
					</div>
				</div>
			);
		};

		const menu = navigation
			.filter((navItem) => navItem.parent == null)
			.map((navItem) => {
				if (!navItem.url) {
					return (
						<div key={navItem.id}>
							<ListItem
								aria-describedby={navItem.id}
								onClick={(e) => handleClick(e, navItem.id)}
								className={clsx(
									classes.listItem,
									openedPopoverId === navItem.id ? classes.listItemActive : ''
								)}
							>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									{navItem.title}
								</Typography>
								<ListItemIcon className={classes.listItemIcon}>
									<ExpandMoreIcon
										className={
											openedPopoverId === navItem.id ? classes.expandOpen : ''
										}
										fontSize="small"
									/>
								</ListItemIcon>
							</ListItem>
							<Popover
								elevation={1}
								id={navItem.id}
								open={openedPopoverId === navItem.id}
								anchorEl={anchorEl}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
								classes={{ paper: classes.popover }}
							>
								<div>{renderSubMenu(navItem.id)}</div>
							</Popover>
						</div>
					);
				} else {
					return (
						<ListItem
							aria-describedby={navItem.id}
							className={clsx(
								classes.listItem
							)}
						>
							<Typography
								variant="body1"
								color="textPrimary"
                component={'a'}
								href={navItem.url}
								className={clsx(classes.listItemText, 'menu-item')}
							>
								{navItem.title}
							</Typography>
						</ListItem>
					);
				}
			});

		return (
			<List disablePadding className={classes.navigationContainer}>
				{menu}
				<ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
					<Button
						variant="contained"
						color="primary"
						component="a"
						href="/kontakt"
						className={classes.listItemButton}
					>
						Kontakt
					</Button>
				</ListItem>
			</List>
		);
	};

	return (
		<Toolbar disableGutters className={classes.toolbar} {...rest}>
			<div className={classes.logoContainer}>
				<a href="/" title="LPE.de">
					<Image
						className={classes.logoImage}
						src={themeMode === 'light' ? logo : logo}
						alt="LPE.de"
						lazy={false}
					/>
				</a>
			</div>
			<div className={classes.flexGrow} />
			<Hidden smDown>
				<Navigation classes={classes} />
			</Hidden>
		</Toolbar>
	);
};

Topbar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func,
	themeToggler: PropTypes.func.isRequired,
	themeMode: PropTypes.string.isRequired,
};

export default Topbar;
