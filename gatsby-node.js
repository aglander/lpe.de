const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allMdx {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

	result.data.allMdx.edges.forEach((edge) => {
		createPage({
			path: `/${edge.node.slug}`,
			component: path.resolve('./src/templates/PageViewTemplate.js'),
			context: {
				slug: edge.node.slug,
			},
		});
	});
};
