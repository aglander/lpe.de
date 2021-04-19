import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import {
	Section,
	ContactPanel,
	ContactAndCompareBox,
	PageHero,
	ProvenExpert,
	ProvenExpertStars,
	AwardBox,
	ExamplesBox,
	Example,
	CompareBox,
	InsurancesBox,
	Video,
  Navigation,
} from 'components/organisms';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
	divider: {
		marginBottom: '30px',
	},
	list: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(4),
		},
		fontSize: '1.5em',
		marginLeft: '40px',
	},
	headline2: {
		borderColor: theme.palette.alternate.dark,
		borderWidth: '0 0 1px 0',
		borderStyle: 'solid',
		paddingBottom: '10px',
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(4),
		},
	},
	section: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(4),
		},
	},
	contactPanel: {
		fick: 'dich',
	},
}));

const PageView = (data) => {
	const classes = useStyles();

	const {
		data: {
			mdx: {
				frontmatter: {
					heroTitle,
					heroClaim,
					heroDescription,
					slug,
					compare,
					heroImage,
				},
				body,
			},
		},
	} = data;

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
				className={classes.headline2}
			/>
		),
		ul: (props) => <ul {...props} className={classes.list} />,
		ContactAndCompareBox: (props) => (
			<ContactAndCompareBox {...props} slug={slug} compare={compare} />
		),
		ProvenExpert,
		AwardBox,
		ExamplesBox,
		Example,
		Link: (props) => (
			<Typography {...props} component={Link} variant="h6" color="primary" />
		),
		CompareBox,
		InsurancesBox,
		hr: (props) => <Divider {...props} className={classes.divider} />,
		Video,
    Navigation,
	};

	return (
		<div className={classes.root}>
			<PageHero
				title={heroTitle}
				claim={heroClaim}
				description={heroDescription}
				slug={slug}
				compare={compare}
				image={heroImage}
			/>
			<Section>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
						<MDXProvider components={components}>
							<MDXRenderer>{body}</MDXRenderer>
						</MDXProvider>
						<ProvenExpertStars />
					</Grid>
					<Grid item xs={12} md={4}>
						<ContactPanel />
					</Grid>
				</Grid>
			</Section>
		</div>
	);
};

PageView.propTypes = {
	data: PropTypes.object,
};

export default PageView;
