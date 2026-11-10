/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Franz Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://dev-franz-wordpress-cms.pantheonsite.io/graphql",
        
        // 👇 Stops Gatsby from trying to download images (Pantheon blocks them with 403)
        type: {
          MediaItem: {
            createFileNodes: false,
          },
        },
        
        // 👇 Protects against images embedded inside blog post content
        html: {
          createStaticFiles: false,
        },
      },
    },
  ],
};