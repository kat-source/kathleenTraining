
const {
    getAllProjectsController,
    addProjectController,
    deleteProjectController,
    updateProjectController,
} = require('../../controller/project/index');

// const { updateProjectUseCase } = require('../../use-cases/index');

const projectRoutes = ({ projectRouter, makeExpressCallback }) => {
    // Get all project
    projectRouter.get(
        '/',
        makeExpressCallback(getAllProjectsController)
    );
    //Get project by id
    projectRouter.get(
        '/:id',
        makeExpressCallback(getAllProjectsController)
    );
    //add new project
    projectRouter.post(
        '/',
        makeExpressCallback(addProjectController)
    );
    //delete project by id
    projectRouter.delete(
        '/:id',
        makeExpressCallback(deleteProjectController)
    );
    //update project details
    projectRouter.patch(
        '/:id',
        makeExpressCallback(updateProjectController)
    );
    return projectRouter;
};

module.exports = projectRoutes;