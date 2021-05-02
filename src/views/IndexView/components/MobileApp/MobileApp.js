import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	useMediaQuery,
	Grid,
	ListItem,
	ListItemAvatar,
	Typography,
	Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
	checkBox: {
		color: theme.palette.primary.main,
    background: 'transparent',
    
	},
	listItemAvatar: {
		alignSelf: 'flex-start',
	},
}));

const MobileApp = (props) => {
	const { data, className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={className} {...rest}>
			<Grid container spacing={isMd ? 4 : 2}>
				<Grid item container justify="center" xs={12} md={6} data-aos="fade-up">
					<StaticImage
						src="../../../../assets/images/LPE_HP.jpg"
						alt="Lars-Peter Eckhardt"
						placeholder="blurred"
						layout="fixed"
						width={300}
						height={400}
					/>
				</Grid>
				<Grid item xs={12} md={6} data-aos="fade-up">
					<Grid
						container
						alignItems="flex-start"
						justify="center"
						direction="column"
					>
						<SectionHeader
							label="Über LPE"
							title="Lars-Peter Eckhardt"
							subtitle="Als mehrfach ausgezeichneter, unabhängiger Versicherungsmakler & Finanzmakler ist es mein Anspruch, Sie gut zu beraten, gut zu betreuen und möglichst sehr, sehr lange mit Ihnen zusammenzuarbeiten. Mein Team und ich stehen dafür an Ihrer Seite."
							align="left"
							disableGutter
						/>
						<Grid container spacing={2}>
							{data.map((item, index) => (
								<Grid item xs={12} sm={6} key={index} data-aos="fade-up">
									<ListItem disableGutters>
										<ListItemAvatar className={classes.listItemAvatar}>
											<Avatar className={classes.checkBox}><CheckCircleIcon /></Avatar>
										</ListItemAvatar>
										<Typography variant="subtitle1" color="textPrimary">
											{item}
										</Typography>
									</ListItem>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

MobileApp.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * Data to be rendered
	 */
	data: PropTypes.array.isRequired,
};

export default MobileApp;
