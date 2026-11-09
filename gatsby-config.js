/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Franz Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
  
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://dev-franz-wordpress-cms.pantheonsite.io/graphql`,
        production: {
          allow404Images: true, 
          allow401Images: true,
        },
      },
    },
  ]
};