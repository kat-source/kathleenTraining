const { updateProject_ENTITY } = require("../entities/project/index");
const updateProject = ({ projectDb, updateProject_ENTITY}) => {
    return async function add( info ) {
            
      let msg;
      const { id } = info;
      const res = await projectDb.getProject({ id });
      
      if (res == null){
        msg= `Error: Project not found or does not exist`
      } else {
        console.log('the info sent:', info)
        const result = await projectDb.updateProject(info)
        msg = `Project with ID of ${id} updated`
        // console.log(`INFO USE-CASE??????????????????????????????????????????????????????`);
        // console.log(info);
        // console.log(result)
          }
          return msg;
    }
}
module.exports = updateProject;