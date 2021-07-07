const {updateProject_ENTITY, makeProject_ENTITY} = require('../entities/project')

const projectDb = require('../data-access/project/index')

const addProject = require('./addProject')
const getProject = require('./getProject')
const deleteProject = require('./deleteProject')
const updateProject = require('./updateProject')

const addProjectUseCase = addProject({ projectDb, makeProject_ENTITY });
const getProjectUseCase = getProject({ projectDb });
const deleteProjectUseCase = deleteProject({ projectDb });
const updateProjectUseCase = updateProject({ projectDb, updateProject_ENTITY });

const services = Object.freeze({
    addProjectUseCase,
    getProjectUseCase,
    deleteProjectUseCase,
    updateProjectUseCase,
});

module.exports = services
module.exports = {
    
    addProjectUseCase,
    getProjectUseCase,
    deleteProjectUseCase,
    updateProjectUseCase,
};

