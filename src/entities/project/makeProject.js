
// export default function buildMakeProject () {

    const makeProject = ({ info }) => {

        const title = info.title
        const description = info.description
        const budget = info.budget
        const email = info.email
        console.log(
            "makeProject entity ===============================================================================: ",
            info
          );
        
        if(!title) { 
            throw new Error('Project must have a title!');
        }
        if(!description) { 
            throw new Error('Project must have a description!');
        }
        if(!budget) { 
            throw new Error('Project must have a budget!');
        }
        if(!email) { 
            throw new Error('Project must have an email!');
        }

        return Object.freeze({
            title: () => title,
            description: () => description,
            budget: () => budget,
            email: () => email,

        });

    };

    module.exports = makeProject;

// }