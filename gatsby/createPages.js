const path = require('path')

module.exports = async = ({ actions, graphql, reporter, cache }) => {
    const { createPage } = actions

    const contact = new Promise((resolve, reject) => {
        createPage({
            path: '/contact',
            component: path.resolve('./src/templates/Contact/Contact.js')
        })
        resolve()
    })

    const byTheNumbers = new Promise((resolve, reject) => {
        createPage({
            path: '/by-the-numbers',
            component: path.resolve(
                './src/templates/ByTheNumbers/ByTheNumbers.js'
            )
        })
        resolve()
    })

    const spiritAndMind = new Promise((resolve, reject) => {
        createPage({
            path: '/spirit-and-mind',
            component: path.resolve(
                './src/templates/SpiritAndMind/SpiritAndMind.js'
            )
        })
        resolve()
    })

    const bio = new Promise((resolve, reject) => {
        createPage({
            path: '/bio',
            component: path.resolve(
                './src/templates/Bio/Bio.js'
            )
        })
        resolve()
    })

    const recipeDetail = new Promise((resolve, reject) => {
        graphql(
            `
            {
                allContentfulRecipe {
                    edges {
                        node {
                            path
                        }
                    }
                }
            }
            `
        ).then(result => {
            const pages = result.data.allContentfulRecipe.edges
            pages.map(({ node }) => {
                createPage({
                    path: `/by-the-numbers/${node.path}`,
                    component: path.resolve(
                        './src/templates/ByTheNumbers/RecipeDetail/RecipeDetail.js'
                    ),
                    context: {
                        slug: node.path
                    }
                })
            })
        })
        resolve()
    })

    return Promise.all([bio, byTheNumbers, contact, recipeDetail, spiritAndMind])
}
