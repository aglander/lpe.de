import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const { places } = require('../../data/places');

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
			<li>
				<Link to={url}>{title}</Link>
			</li>
		);
	});
	return <ul>{seoPages}</ul>;
};

const PlacesView = (data) => {
	const placesList = places.map((place) => {
		return (
			<div>
				<h1>{place.title}</h1>
				<SeoPages placeSlug = {place.slug}/>
			</div>
		);
	});
	return <div>{placesList}</div>;
};

PlacesView.propTypes = {};

export default PlacesView;
