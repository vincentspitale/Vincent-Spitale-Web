module.exports = {
  siteMetadata: {
    title: `Vincent Spitale`,
    description: `student, developer, diversity advocate`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/json`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vincent Spitale`,
        short_name: `Vincent`,
        start_url: `/`,
        icon: `src/assets/memoji.png`,  //This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout.tsx`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
