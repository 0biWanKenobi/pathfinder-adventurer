
const {api, json} = require('../api')

const conf = app => {
  app.use(json())
  app.use('/api', api)
}

module.exports.configureAPI = conf