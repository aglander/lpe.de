import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

import { SEO } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	topBar: {
		position: 'fixed',
		backgroundColor: 'white',
		width: '100%',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		zIndex: 999,
	},
	main: {
		paddingTop: '65px',
	},
}));

const Main = ({ children, themeToggler, themeMode }) => {
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const [openSidebar, setOpenSidebar] = useState(false);

	const handleSidebarOpen = () => {
		setOpenSidebar(true);
	};

	const handleSidebarClose = () => {
		setOpenSidebar(false);
	};

	const open = isMd ? false : openSidebar;

	return (
		<div
			className={clsx({
				[classes.root]: true,
			})}
		>
			<SEO />
			<div className={classes.topBar}>
				<Topbar onSidebarOpen={handleSidebarOpen} />
			</div>
			<main className={classes.main}>{children}</main>
			<Footer />
		</div>
	);
};

Main.propTypes = {
	children: PropTypes.node,
	themeToggler: PropTypes.func.isRequired,
	themeMode: PropTypes.string.isRequired,
};

export default Main;
