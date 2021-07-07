const {
    addProjectUseCase,
    getProjectUseCase,
    deleteProjectUseCase,
    updateProjectUseCase
} = require('../../use-cases/index')

const getAllProjects = require('./getProject');
const addProject = require('./addProject');
const deleteProject = require('./deleteProject');
const updateProject = require('./updateProject');

const getAllProjectsController = getAllProjects({ getProjectUseCase });
const addProjectController = addProject({ addProjectUseCase });
const deleteProjectController = deleteProject({ deleteProjectUseCase });
const updateProjectController = updateProject({ updateProjectUseCase })

const services = Object.freeze({
    getAllProjectsController,
    addProjectController,
    deleteProjectController,
    updateProjectController,
});

module.exports = services;
module.exports = {
    getAllProjectsController,
    addProjectController,
    deleteProjectController,
    updateProjectController,
}


