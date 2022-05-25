module.exports = {
  siteMetadata: {
    siteUrl: `https://www.gaelo.fr/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lang`,
        path: `${__dirname}/src/lang`,
      },
    },

    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -30,
        duration: 100,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
