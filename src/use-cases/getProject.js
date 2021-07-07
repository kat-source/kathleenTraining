const getProject = ({ projectDb }) => {
    return async function list(info) {
        let list;
        const { id } = info;

        if(id){
            const res = await projectDb.getProject({ id });
            list = res

            //console.log(res)
        }
        else {
            const result = await projectDb.getAllProjects({});
        
            //console.log(result)
            list = result.map(result => result)
       }
    return list
    } 
}

module.exports = getProject