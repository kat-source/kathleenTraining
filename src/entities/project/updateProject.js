
// export default function buildMakeProject () {

    const updateProject = ({ info }) => {

        const title = info.title
        const description = info.description
        const budget = info.budget
        const email = info.email
        console.log(
            "update Project entity===============================================================================: ",
            info
          );
        

        // return Object.freeze({
        //     title: () => title,
        //     description: () => description,
        //     budget: () => budget,
        //     email: () => email,

        // });

    };

    module.exports = updateProject;

// }