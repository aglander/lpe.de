module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: `Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler`,
    description: `5★ Top-Empfehlung: Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler ► Altersvorsorge ✔ | Versicherungen ✔ | Finanzierungen ✔ | Immobilien ✔ | ★★★★★ |`,
    url: 'https://www.lpe.de',
    siteUrl: 'https://www.lpe.de', // sitemap plugin needs this field
    image: '/src/images/icon.png'
  },
  plugins: [
    "gatsby-plugin-mdx",
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-114309100-1", // leave empty if you want to disable the tracker
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["X-Frame-Options: sameorigin"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lpe.de`,
        short_name: `LPE.de`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#68B436`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: { siteUrl: `https://www.lpe.de` },
    },    
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // schreibe direkt in /public/sitemap.xml
        output: `/sitemap.xml`,
        resolveSiteUrl: () => `https://www.lpe.de`,
    
        // explizit alle Seiten einsammeln (robust bei MDX & programmatic pages)
        query: `
          {
            allSitePage {
              nodes { path }
            }
          }
        `,
        resolvePages: ({ allSitePage }) =>
          allSitePage.nodes.map(p => ({ path: p.path })),
    
        serialize: ({ path }) => ({
          url: `https://www.lpe.de${path}`,
          changefreq: `weekly`,
          priority: 0.7,
        }),
    
        excludes: [
          `/downloads/`,
          `/legal/*`,
        ],
      },
    },    
  ],
}
