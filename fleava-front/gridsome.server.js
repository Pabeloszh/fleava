// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const GraphQLList = require('graphql')

module.exports = function (api) {
  api.loadSource(async actions => {
    const response = await axios.get('http://localhost:1337/works')

    const collection = actions.addCollection({
      typeName: 'PostedWorks'
    })

    for (const work of response.data) {
      collection.addNode({
          id: work.id,
          name:work.name,
          title: work.title,
          tags: work.tags,
          cardImg: work.cardImg.formats.medium.url,
      })
    }
  })
}
