const projectQuery = ({ db, model }) => {
    return Object.freeze({
        getProject,
        getAllProjects,
        updateProject,
        deleteProject,
        addProject,

    });


    async function getProject({ id }) {
        const result = await model
        .findByPk(id)
        .catch((error) => console.log(error));

       return result
    }

    async function getAllProjects() {
        const result = await model
        .findAll({raw: true, order: [['id', 'ASC']]})
        .catch((error) => console.log(error));
        
       return result
    }

    async function deleteProject({ id }) {
        const result = await model
        .findByPk(id)
        .then((project) => {
            (!project) ?  (`Project with the id of ${id} not found or does not exist`) 
            : 
            project.destroy()
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
        
       return result
    }

    async function updateProject(data) {
        // console.log(`DATA-ACCESS DATA????????????????????????????????????????????????????????\n${data}`)
        console.log('the data sent:', data)
        const result = await model
        .update(data, {where: {id: data.id},})
        .then((project) => {
            (project == 0) ? console.log(`Project with the id of ${id} not found or does not exist`) 
            :
            console.log(`Project with the id of ${data.id} updated`) 
        })
        .catch((error) => console.log(error));
        
       return result
    }

    async function addProject(data) {
        console.log(`DATA-ACCESS DATA????????????????????????????????????????????????????????\n${data}`)

        const result = await model
        .create(data)
        .catch((error) => console.log(error));

        return result;
    }

}

module.exports = projectQuery;