const makeProject_ENTITY = require('./makeProject')

const updateProject_ENTITY = require('./updateProject')

const services = Object.freeze({ 
    makeProject_ENTITY,
    updateProject_ENTITY
})
// const makeProject = makeProject_ENTITY({ info })

module.exports = services
 module.exports = { makeProject_ENTITY, updateProject_ENTITY }
