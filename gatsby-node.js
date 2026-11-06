const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Use the file where it currently lives
  const postTemplate = path.resolve("./src/templates/blog-post.js")

  result.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: post.uri, 
      component: postTemplate,
      context: {
        id: post.id, 
      },
    })
  })
}