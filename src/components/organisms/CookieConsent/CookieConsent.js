import React, { useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import Cookies from 'js-cookie';

const CookieConsent = () => {
	const [open, setOpen] = useState(
		!Cookies.get('gatsby-gdpr-google-analytics')
	);

	const enableTracking = (doIt) => {
		if (doIt) {
			Cookies.set('gatsby-gdpr-google-analytics', 'true', { expires: 365 });
		} else {
			Cookies.set('gatsby-gdpr-google-analytics', 'false', { expires: 7 });
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
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			disableBackdropClick={true}
			disableEscapeKeyDown={true}
		>
			<DialogTitle id="alert-dialog-title">
				Wir benötigen Ihre Zustimmung
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Diese Website benutzt Google Analytics, um die Erfahrung von Benutzern
					zu verbessern. Sie können die Erfassung Ihrer Daten durch Google
					Analytics verhindern, indem Sie auf "Ablehnen" klicken. Es wird
					ein Cookie gesetzt, dass die Erfassung Ihrer Daten bei Besuchen dieser
					Website verhindert.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={deny} color="secondary">
					Ablehnen
				</Button>
				<Button
					onClick={accept}
					color="primary"
					autoFocus
					variant="contained"
					id="cookie.accept"
				>
					Akzeptieren
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CookieConsent;
