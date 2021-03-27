import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
}));

const SeoPages = (placeSlug) => {
	const data = useStaticQuery(graphql`
		{
			allMdx(filter: { fileAbsolutePath: { regex: "./data/seo./" } }) {
				nodes {
					frontmatter {
						title
						slug
					}
				}
			}
		}
	`);

	const seoPages = data.allMdx.nodes.map((node) => {
		const {
			frontmatter: { title, slug },
		} = node;
		const url = `/${slug}-${placeSlug.placeSlug}`;
		return (
			<ListItem>
				<Link to={url}>{title}</Link>
			</ListItem>
		);
	});
	return <List>{seoPages}</List>;
};

const PlacesView = (data) => {
	const classes = useStyles();
	const placesList = places.map((place) => {
		return (
			<div>
				<Typography
					component="h2"
					variant="h4"
					color="textPrimary"
					className={classes.section}
				>
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
						{placesList}
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
