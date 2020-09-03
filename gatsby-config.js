module.exports = {
  siteMetadata: {
    title: `Vincent Spitale`,
    description: `student, programmer, diversity advocate`,
    keywords: 'Vincent Spitale, augmented reality, AR, inventory, multi, northeastern, visual positioning system, vps, swiftui, point cloud, ply',
    author: `Vincent Spitale`,
    lang: 'en',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/VS.svg`,  //This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-dark-mode',
  ],
}
