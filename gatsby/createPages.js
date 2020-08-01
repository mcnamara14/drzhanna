module.exports = async = ({ actions, graphql, reporter, cache }) => {
    const { createPage } = actions

    const contact = new Promise((resolve, reject) => {
        createPage({
            path: 'contact',
            component: path.resolve('./src/templates/Contact/Contact.js')
        })
        resolve()
    })

    return Promise.all([contact])
}
