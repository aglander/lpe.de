const { navigation } = require('./src/data/navigation.js');

module.exports = {
	siteMetadata: {
		title: 'LPE.de',
		navigation: navigation,
	},
	plugins: [
		'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data/`,
			},
		},
		'gatsby-plugin-top-layout',
		{
			resolve: 'gatsby-plugin-material-ui',
			// If you want to use styled components you should change the injection order.
			options: {
				// stylesProvider: {
				//   injectFirst: true,
				// },
				disableAutoprefixing: true,
				disableMinification: true,
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-resolve-src',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
	],
};
