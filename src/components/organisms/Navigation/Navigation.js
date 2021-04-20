import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
	List,
	ListItem,
	ListItemIcon,
	Popover,
	Typography,
	Button,
} from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'gatsby';

import navigationData from 'data/navigation';

const useStyles = makeStyles((theme) => ({
	navigationContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},

	navigationContainerHorizontal: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
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
	listItemVertical: {
		borderBottom: '1px solid #ccc',
		borderTop: '1px solid #ccc',
		margin: '20px 0',
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
	menu: {
		display: 'flex',
		flexFlow: 'row wrap',
		maxWidth: '1000px',
		marginBottom: '-20px',
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

const Navigation = ({ id, isHorizontal }) => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);
	const [openedPopoverId, setOpenedPopoverId] = useState(null);

	const handleClick = (event, popoverId) => {
		setAnchorEl(event.target);
		setOpenedPopoverId(popoverId);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpenedPopoverId(null);
	};

	const navigation = navigationData;

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
								component={Link}
								to={navItem.url}
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
						<div className={classes.menuItem}>
							<Typography
								variant="body2"
								color="primary"
								className={classes.menuGroupTitle}
							>
								{navItem.title}
							</Typography>

							<List disablePadding>{renderSubMenu(navItem.id)}</List>
						</div>
					);
				}
			});
		return <div className={classes.menu}>{subMenu}</div>;
	};

	const renderMenu = (id) => {
		return navigation
			.filter((navItem) => id ? navItem.parent === id : navItem.parent === null)
			.map((navItem) => {
				if (!navItem.url) {
					return (
						<div key={navItem.id}>
							<ListItem
								aria-describedby={navItem.id}
								onClick={(e) => handleClick(e, navItem.id)}
								className={clsx(
									isHorizontal ? classes.listItem : classes.listItemVertical,
									openedPopoverId === navItem.id ? classes.listItemActive : ''
								)}
							>
								<Typography
									variant={isHorizontal ? 'body1' : 'h6'}
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									{navItem.title}
								</Typography>
								{isHorizontal && (
									<ListItemIcon className={classes.listItemIcon}>
										<ExpandMoreIcon
											className={
												openedPopoverId === navItem.id ? classes.expandOpen : ''
											}
											fontSize="small"
										/>
									</ListItemIcon>
								)}
							</ListItem>
							{isHorizontal ? (
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
							) : (
								<div>{renderSubMenu(navItem.id)}</div>
							)}
						</div>
					);
				} else {
					return (
						<ListItem
							aria-describedby={navItem.id}
							className={clsx(
								isHorizontal ? classes.listItem : classes.listItemVertical
							)}
						>
							<Typography
								variant="body1"
								color="textPrimary"
								component={Link}
								to={navItem.url}
								className={clsx(classes.listItemText, 'menu-item')}
							>
								{navItem.title}
							</Typography>
						</ListItem>
					);
				}
			});
	};

	return (
		<List
			disablePadding
			className={
				isHorizontal
					? classes.navigationContainerHorizontal
					: classes.navigationContainer
			}
		>
			{renderMenu(id)}
			{id ? null : (
				<ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
					<Button
						variant="contained"
						color="primary"
						component={Link}
						to="/kontakt"
						className={classes.listItemButton}
					>
						Kontakt
					</Button>
				</ListItem>
			)}
		</List>
	);
};

Navigation.propTypes = {
	isHorizontal: PropTypes.bool,
};

export default Navigation;
