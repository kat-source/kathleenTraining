const deleteProject = ({ projectDb }) => {
    return async function select(info) {
      const { id } = info;
      let msg;
      const res = await projectDb.getProject({ id });

      if (res == null){
        msg= `Error: Project not deleted`
      } else {
          //Delete
        const result = await projectDb.deleteProject({ id })
                                      
        msg = `Project with ID of ${id} deleted`
      }
     
      return msg;
      
    }
}

module.exports = deleteProject;