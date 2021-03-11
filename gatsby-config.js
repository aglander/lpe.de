module.exports = {
  siteMetadata: {
    title: "LPE.de",
  },
  plugins: [
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
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-resolve-src',
  ],
};
