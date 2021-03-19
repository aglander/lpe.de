module.exports = {
  siteMetadata: {
    title: "LPE.de",
    navigation: [
      {
        id: 'altersvorsorge',
        title: 'Altersvorsorge',
      },
      {
        id: 'riesterrente',
        parent: 'altersvorsorge',
        title: 'Riesterrente',
        url: '/riesterrente'
      },
      {
        id: 'basisrente',
        parent: 'altersvorsorge',
        title: 'Basisrente',
        url: '/basisrente'
      },
      {
        id: 'rentenversicherung',
        parent: 'altersvorsorge',
        title: 'Rentenversicherung',
        url: '/rentenversicherung'
      },
      {
        id: 'fondsgebundene-rentenversicherung',
        parent: 'altersvorsorge',
        title: 'Fondsgebundene Rentenversicherung',
        url: '/fondsgebundene-rentenversicherung'
      },
      {
        id: 'kapitallebensversicherung',
        parent: 'altersvorsorge',
        title: 'Kapitallebensversicherung',
        url: '/kapitallebensversicherung'
      },
      {
        id: 'fondsgebundene-lebensversicherung',
        parent: 'altersvorsorge',
        title: 'Fondsgebundene Lebensversicherung',
        url: '/fondsgebundene-lebensversicherung'
      },
      {
        id: 'risikolebensversicherung',
        parent: 'altersvorsorge',
        title: 'Risikolebensversicherung',
        url: '/risikolebensversicherung'
      },
      {
        id: 'berufsunfaehigkeitsversicherung',
        parent: 'altersvorsorge',
        title: 'Berufsunfähigkeitsversicherung',
        url: '/berufsunfaehigkeitsversicherung'
      },
      {
        id: 'schwere-krankheiten-versicherung',
        parent: 'altersvorsorge',
        title: 'Schwere Krankheiten Versicherung',
        url: '/schwere-krankheiten-versicherung'
      },
      {
        id: 'versicherungen',
        title: 'Versicherungen',
      },
      {
        id: 'risikovorsorge',
        parent: 'versicherungen',
        title: 'Risikovorsorge'
      },
      {
        id: 'versicherung-risikolebensversicherung',
        parent: 'risikovorsorge',
        title: 'Risikolebensversicherung',
        url: '/risikolebensversicherung'
      },
      {
        id: 'versicherung-berufsunfaehigkeitsversicherung',
        parent: 'risikovorsorge',
        title: 'Berufsunfähigkeitsversicherung',
        url: '/berufsunfaehigkeitsversicherung'
      },
      {
        id: 'finanzierungen',
        title: 'Finanzierungen',
      },
      {
        id: 'liebe-familie',
        title: 'Liebe Familie',
        url: '/liebe-familie'
      },
      {
        id: 'immobilien',
        title: 'Immobilien',
        url: '/immobilien'
      }
    ]
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
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
