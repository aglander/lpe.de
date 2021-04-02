import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	useMediaQuery,
	Grid,
	Typography,
	Divider,
	Button,
} from '@material-ui/core';
import { DescriptionCta } from 'components/molecules';
import { Section,  } from 'components/organisms';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		'& .description-cta__button-group': {
			flexWrap: 'nowrap',
		},
	},
	pagePaddingTop: {
		paddingTop: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(5),
		},
	},
	fontWeightBold: {
		fontWeight: 'bold',
	},
	divider: {
		margin: theme.spacing(3, 0),
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(5, 0),
		},
	},
	textWhite: {
		color: 'white',
	},
	cardHighlighted: {
		background: theme.palette.primary.dark,
	},
	checkBox: {
		background: 'transparent',
		borderRadius: 0,
		width: 30,
		height: 30,
	},
	list: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(4),
		},
		fontSize: '1.5em',
		marginLeft: '40px',
	},
	section: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(4),
		},
	},
}));

const LegalView = (data) => {
	const {
		data: {
			mdx: {
				frontmatter: { title, print, date },
				body,
			},
		},
	} = data;

	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const components = {
		p: (props) => (
			<Typography
				{...props}
				component="p"
				variant="h6"
				color="textPrimary"
				className={classes.section}
			/>
		),
		h1: (props) => (
			<Typography
				{...props}
				component="h1"
				variant="h3"
				color="textPrimary"
				className={classes.section}
			/>
		),
		h2: (props) => (
			<Typography
				{...props}
				component="h2"
				variant="h4"
				color="textPrimary"
				className={classes.section}
			/>
		),
		ul: (props) => <ul {...props} className={classes.list} />,
	};

	return (
		<div className={classes.root}>
			<Section className={classes.pagePaddingTop}>
				<DescriptionCta
					title={title}
					subtitle={date ? `Aktualisiert am ${date}` : ''}
					primaryCta={
						print ? (
							<Button variant="outlined" color="primary" size="large">
								Print
							</Button>
						) : (
							''
						)
					}
					align={'left'}
					titleProps={{
						className: classes.fontWeightBold,
						color: 'textPrimary',
					}}
					subtitleProps={{
						color: 'textSecondary',
					}}
				/>
				<Divider className={classes.divider} />
				<Grid container spacing={isMd ? 4 : 2}>
					<Grid item xs={12} md={8}>
						<MDXProvider components={components}>
							<MDXRenderer>{body}</MDXRenderer>
						</MDXProvider>
					</Grid>
				</Grid>
			</Section>
		</div>
	);
};

LegalView.propTypes = {
	data: PropTypes.object,
};

export default LegalView;
