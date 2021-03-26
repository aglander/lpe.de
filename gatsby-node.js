const path = require('path');
const { places } = require('./src/data/places');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allMdx {
				edges {
					node {
						slug
						frontmatter {
							compare
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
	}

	result.data.allMdx.edges.forEach((edge) => {
		const slug = edge.node.slug.split('/');
		if (slug[0] === 'page') {
			createPage({
				path: `/${slug[1]}`,
				component: path.resolve('./src/templates/PageViewTemplate.js'),
				context: {
					slug: edge.node.slug,
				},
			});
			if (edge.node.frontmatter.compare) {
				createPage({
					path: `/${slug[1]}-vergleichen`,
					component: path.resolve('./src/templates/CompareViewTemplate.js'),
					context: {
						slug: edge.node.slug,
					},
				});
			}
		}
		if (slug[0] === 'legal') {
			createPage({
				path: `/${slug[1]}`,
				component: path.resolve('./src/templates/LegalViewTemplate.js'),
				context: {
					slug: edge.node.slug,
				},
			});
		}
		if (slug[0] === 'seo') {
			places.forEach((place) => {
				createPage({
					path: `/${slug[1]}-${place.slug}`,
					component: path.resolve('./src/templates/SeoViewTemplate.js'),
					context: {
						slug: edge.node.slug,
						place: place.slug,
						image: place.heroImage,
					},
				});
			});
		}
	});
};
