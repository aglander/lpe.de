import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Section, ContactPanel } from 'components/organisms';
import { Grid, Typography, List, ListItem } from '@material-ui/core';

const { places } = require('../../data/places');

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
	section: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(4),
		},
	},
	container: {
		display: 'flex',
		flexFlow: 'row wrap',
	},
	places: {
		flex: '1 50%',
	},
}));

const SeoPages = (placeSlug) => {
	const data = useStaticQuery(graphql`
		{
			allMdx(filter: { fileAbsolutePath: { regex: "./data/seo./" } }) {
				nodes {
					frontmatter {
						heroTitle
						slug
					}
				}
			}
		}
	`);

	const seoPages = data.allMdx.nodes.map((node) => {
		const {
			frontmatter: { heroTitle, slug },
		} = node;
		const url = `/${slug}-${placeSlug.placeSlug}`;
		return (
			<ListItem>
				<Typography component={Link} to={url} variant="body1" color="primary">
					{heroTitle}
				</Typography>
			</ListItem>
		);
	});
	return <List>{seoPages}</List>;
};

const PlacesView = (data) => {
	const classes = useStyles();
	const placesList = places.map((place) => {
		return (
			<div className={clsx(classes.places, classes.section)}>
				<Typography component="h2" variant="h5" color="textPrimary">
					{place.title}
				</Typography>
				<SeoPages placeSlug={place.slug} />
			</div>
		);
	});

	return (
		<div className={classes.root}>
			<Section>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
						<Typography
							component="h1"
							variant="h3"
							color="textPrimary"
							className={classes.section}
						>
							Ortsverzeichnis
						</Typography>
						<div className={classes.container}>{placesList}</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<ContactPanel />
					</Grid>
				</Grid>
			</Section>
		</div>
	);
};

PlacesView.propTypes = {};

export default PlacesView;
