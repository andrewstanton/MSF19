const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
// const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const internalPage = path.resolve(
    `src/components/templates/InternalPageTemplate/index.js`
  )

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.error) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges

    pages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: internalPage,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
