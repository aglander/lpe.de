import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: '800px',
		margin: '0 auto',
	},
}));

const schema = {
	fullname: {
		presence: { allowEmpty: false, message: 'Bitte geben Sie Ihren vollständigen Namen an' },
		length: {
			maximum: 128,
		},
	},
	email: {
		presence: { allowEmpty: false, message: 'Bitte geben Sie eine gültige E-Mail-Adresse an' },
		email: {
			message: 'Bitte geben Sie eine gültige E-Mail-Adresse an',
		},
		length: {
			maximum: 300,
		},
	},
	message: {
		presence: { allowEmpty: false, message: 'Bitte tippen Sie Ihre Nachricht ein' },
	},
};

const ContactForm = () => {
	const classes = useStyles();

	const [formState, setFormState] = React.useState({
		isValid: false,
		values: {},
		touched: {},
		errors: {},
	});

	React.useEffect(() => {
		const errors = validate(formState.values, schema, { fullMessages: false });

		setFormState((formState) => ({
			...formState,
			isValid: errors ? false : true,
			errors: errors || {},
		}));
	}, [formState.values]);

	const handleChange = (event) => {
		event.persist();

		setFormState((formState) => ({
			...formState,
			values: {
				...formState.values,
				[event.target.name]:
					event.target.type === 'checkbox'
						? event.target.checked
						: event.target.value,
			},
			touched: {
				...formState.touched,
				[event.target.name]: true,
			},
		}));
	};

	const hasError = (field) =>
		formState.touched[field] && formState.errors[field] ? true : false;

	return (
		<div className={classes.root}>
			<form
				name="contact-form"
				method="post"
				action="https://form.taxi/s/yqwc7dz5"
			>
				<input type="hidden" name="form-name" value="contact-form" />
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h4" align="center">
							<strong>Kontakt</strong>
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
							Wir freuen uns auf Ihre Nachricht.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder="Ihr Name"
							label="Ihr Name"
							variant="outlined"
							size="medium"
							name="fullname"
							fullWidth
							helperText={
								hasError('fullname') ? formState.errors.fullname[0] : null
							}
							error={hasError('fullname')}
							onChange={handleChange}
							type="text"
							value={formState.values.fullname || ''}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder="E-Mail"
							label="E-Mail"
							variant="outlined"
							size="medium"
							name="email"
							fullWidth
							helperText={hasError('email') ? formState.errors.email[0] : null}
							error={hasError('email')}
							onChange={handleChange}
							type="email"
							value={formState.values.email || ''}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder="Telefon (optional)"
							label="Telefon (optional)"
							variant="outlined"
							size="medium"
							name="phone"
							fullWidth
							helperText={hasError('phone') ? formState.errors.phone[0] : null}
							onChange={handleChange}
							type="text"
							value={formState.values.phone || ''}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder="Anschrift (optional)"
							label="Anschrift (optional)"
							variant="outlined"
							size="medium"
							name="address"
							fullWidth
							helperText={
								hasError('address') ? formState.errors.address[0] : null
							}
							onChange={handleChange}
							type="address"
							value={formState.values.address || ''}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							placeholder="Ihre Nachricht"
							label="Ihre Nachricht"
							variant="outlined"
							name="message"
							fullWidth
							helperText={
								hasError('message') ? formState.errors.message[0] : null
							}
							error={hasError('message')}
							onChange={handleChange}
							multiline
							rows={6}
							value={formState.values.message || ''}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							size="large"
							variant="contained"
							type="submit"
							color="primary"
							disabled={!formState.isValid}
						>
							Absenden
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default ContactForm;
