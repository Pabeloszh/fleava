const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const workResponse = await axios.get('http://localhost:1337/works')
    const expertiseResponse = await axios.get('http://localhost:1337/expertise-posts')
    const journalResponse = await axios.get('http://localhost:1337/journals')
    const awardsResponse = await axios.get('http://localhost:1337/awards')

    const workCollection = actions.addCollection({
      typeName: 'PostedWorks'
    })
    const expertiseCollection = actions.addCollection({
      typeName: "PostedExpertise"
    })
    const journalCollection = actions.addCollection({
      typeName: "PostedJournal"
    })
    const awardsCollection = actions.addCollection({
      typeName: "PostedAwards"
    })

    for (const work of workResponse.data) {
      workCollection.addNode({
          id: work.id,
          name:work.name,
          title: work.title,
          tags: work.tags,
          cardImg: work.cardImg.formats.medium.url,
          mainImg: work.mainImg.formats.large.url,
          hexColor: work.hexColor,
          workDescription: work.workDescription,
          workParallax: work.workParallax,
          workWebsite: work.workWebsite,
          workMobile: work.workMobile,
          workAwards: work.workAwards
      })
    }
    for(const exp of expertiseResponse.data){
      expertiseCollection.addNode({
        id:exp.id,
        name:exp.name,
        title: exp.title,
        desc: exp.desc,
        cardImg: exp.cardImg.formats.medium.url,
        postTitle:exp.postTitle,
        postDesc: exp.postDesc,
        url: exp.url,
        firstCardTitle: exp.firstCardTitle,
        firstCardDesc: exp.firstCardDesc,
        expertiseCards: exp.expertiseCards,
      })
    }
    for (const journal of journalResponse.data) {
      journalCollection.addNode({
          id: journal.id,
          image: journal.image,
          title: journal.title,
          desc: journal.desc,
          tag: journal.tag,
          blog: journal.blog,
          name: journal.name
      })
    }
    for (const award of awardsResponse.data) {
      awardsCollection.addNode({
          id: award.id,
          month: award.month,
          awards_descs: award.awards_descs,
      })
    }
  })
}
