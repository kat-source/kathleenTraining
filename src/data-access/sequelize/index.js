const db = require('../index')

const ProjectModel = require('./models/Project')

const services = Object.freeze({ ProjectModel })

module.exports = { 
    services, 
    ProjectModel
}