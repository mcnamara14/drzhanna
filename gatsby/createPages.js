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
            component: path.resolve('./src/templates/ByTheNumbers/ByTheNumbers.js')
        })
        resolve()
    })

    return Promise.all([byTheNumbers, contact])
}
