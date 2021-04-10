import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
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
} from 'components/organisms';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const { places } = require('../../data/places');

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
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
	contactPanel: {
		fick: 'dich',
	},
}));

const SeoView = (data) => {
	const classes = useStyles();

	let {
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
			file: { childImageSharp },
			place,
		},
	} = data;

	const placeData = places.filter((placeItem) => placeItem.slug === place)[0];
	if (placeData.title) heroClaim = placeData.title;

	if (placeData.image) {
		heroImage = childImageSharp;
	}

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

SeoView.propTypes = {
	data: PropTypes.object,
};

export default SeoView;
