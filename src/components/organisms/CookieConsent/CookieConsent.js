import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

const CookieConsent = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(
		!document.cookie
			.split(';')
			.some((item) => item.trim().startsWith('gatsby-gdpr-google-analytics='))
	);

	const enableTracking = (doIt) => {
		if (doIt) {
			document.cookie = 'gatsby-gdpr-google-analytics=true;max-age=31536000';
		} else {
			document.cookie = 'gatsby-gdpr-google-analytics=false;max-age=604800';
		}
	};

	const accept = () => {
		enableTracking(true);
		handleClose();
	};

	const deny = () => {
		enableTracking(false);
		handleClose();
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				disableBackdropClick={true}
				disableEscapeKeyDown={true}
			>
				<DialogTitle id="alert-dialog-title">{'Cookie'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Wir verwenden Google Analytics, um die Benutzung dieser Website zu
						messen und die Website für Sie kontinuierlich zu optimieren. Google
						nutzt dafür Cookies.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={deny} color="secondary">
						Nein, danke
					</Button>
					<Button
						onClick={accept}
						color="primary"
						autoFocus
						variant="contained"
						id="cookie.accept"
					>
						Einverstanden
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CookieConsent;
