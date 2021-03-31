import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
	Toolbar,
	Hidden,
	IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Image } from 'components/atoms';
import { Navigation } from 'components/organisms';
import { Link } from 'gatsby';
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
		padding: '0px',
		[theme.breakpoints.up('sm')]: {
			padding: '0px',
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
		flexFlow: 'row wrap',
		maxWidth: '1000px',
	},
	menuItem: {
		margin: '0 20px',
		paddingBottom: theme.spacing(5),
		flex: '1 10%',
		width: '280px',
	},
	menuGroupItem: {
		paddingTop: 0,
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
		marginBottom: '10px',
	},
}));

const Topbar = ({ onSidebarOpen, className, ...rest }) => {
	const classes = useStyles();
	return (
		<Toolbar
			disableGutters
			className={clsx(classes.toolbar, className)}
			{...rest}
		>
			<div className={classes.logoContainer}>
				<Link to="/" title="LPE.de">
					<Image
						className={classes.logoImage}
						src={logo}
						alt="LPE.de"
						lazy={false}
					/>
				</Link>
			</div>
			<div className={classes.flexGrow} />
			<Hidden smDown>
				<Navigation isHorizontal={true} />
			</Hidden>
			<Hidden mdUp>
				<IconButton
				className={classes.iconButton}
				onClick={onSidebarOpen}
				aria-label="Menu"
				>
				<MenuIcon />
				</IconButton>
			</Hidden>
		</Toolbar>
	);
};

Topbar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func,
};

export default Topbar;
