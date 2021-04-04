import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	useMediaQuery,
	Grid,
	Typography,
	TextField,
	Button,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import { Image } from 'components/atoms';
import ImageMap from 'assets/images/kontakt-karte.png';

const useStyles = makeStyles((theme) => ({
	map: {
		zIndex: 9,
	},
	form: {
		'& .MuiTextField-root': {
			background: theme.palette.background.paper,
		},
		'& .MuiOutlinedInput-input': {
			background: theme.palette.background.paper,
		},
	},
	inputTitle: {
		fontWeight: 700,
		marginBottom: theme.spacing(1),
	},
	heroleftSide: {
		[theme.breakpoints.up('md')]: {
			marginRight: theme.spacing(6),
		},
	},
}));

const Form = (props) => {
	const { data, className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={className} {...rest}>
			<HeroShaped
				leftSide={
					<div className={classes.heroleftSide}>
						<SectionHeader
							title="Kontaktieren Sie uns"
							subtitle="Wir werden Ihre Anfrage so schnell wie möglich bearbeiten!"
							data-aos="fade-up"
							align="left"
						/>
						<div className={classes.form}>
							<form
								action="https://formspree.io/f/xvodokzw"
								method="POST"
							>
								<Grid container spacing={isMd ? 4 : 2}>
									<Grid item xs={12} data-aos="fade-up">
										<Typography
											variant="subtitle1"
											color="textPrimary"
											className={classes.inputTitle}
										>
											Name
										</Typography>
										<TextField
											placeholder="Ihr Name"
											variant="outlined"
											size="medium"
											name="name"
											fullWidth
											type="text"
                      required={true}
										/>
									</Grid>
									<Grid item xs={12} data-aos="fade-up">
										<Typography
											variant="subtitle1"
											color="textPrimary"
											className={classes.inputTitle}
										>
											E-Mail
										</Typography>
										<TextField
											placeholder="Ihre E-Mail-Adresse"
											variant="outlined"
											size="medium"
											name="email"
											fullWidth
											type="email"
                      required={true}
										/>
									</Grid>
									<Grid item xs={12} data-aos="fade-up">
										<Typography
											variant="subtitle1"
											color="textPrimary"
											className={classes.inputTitle}
										>
											Nachricht
										</Typography>
										<TextField
											placeholder="Wie können wir Ihnen weiterhelfen?"
											variant="outlined"
											name="message"
											fullWidth
											multiline
											rows={4}
                      required={true}
										/>
									</Grid>
									<Grid item container justify="center" xs={12}>
										<Button
											variant="contained"
											type="submit"
											color="primary"
											size="large"
											fullWidth
										>
											submit
										</Button>
									</Grid>
								</Grid>
							</form>
						</div>
					</div>
				}
				rightSide={<Image src={ImageMap} />}
			/>
		</div>
	);
};

Form.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	data: PropTypes.array.isRequired,
};

export default Form;
