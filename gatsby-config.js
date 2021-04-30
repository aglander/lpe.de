module.exports = {
	siteMetadata: {
		title: 'Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler',
		titleTemplate:
			'%s · Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler',
		description:
			'5★ Top-Empfehlung: Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler ► Altersvorsorge ✔ | Versicherungen ✔ | Finanzierungen ✔ | Immobilien ✔ | ★★★★★ |',
		url: 'https://www.lpe.de', // No trailing slash allowed!
		image: '/assets/images/icon.png', // Path to your image you placed in the 'static' folder
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
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: 'UA-114309100-1', // leave empty if you want to disable the tracker
				},
				// defines the environments where the tracking should be available  - default is ["production"]
				environments: ['production', 'development'],
			},
		},
		`gatsby-plugin-netlify`,
	],
};
