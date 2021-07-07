const { makeProject_ENTITY } = require("../entities/project/index");

const addProject = ({ projectDb }) => {
  return async function add({ info }) {
      
    console.log(
        `use case info ##################################################\n ${info}`
      );
      //console.log("Source: ", source)
      
    let data = await makeProject_ENTITY({ info });
    let project = {};
    console.log(
      `use case data ##################################################\n ${data}`
    );

    let test = {
      title: data.title(),
      description: data.description(),
      budget: data.budget(),
      email: data.email(),
    };

    const res = await projectDb.addProject ( test );
    console.log(
      "add project(data)===============================================================================: ",
      res
    );

    let prompt;
    if (res !== undefined) {
      project.title = res.title;
      project.description = res.description;
      project.budget = res.budget;
      project.email = res.email;
      prompt = "Project Added Successfully";
      return {
        message: prompt,
        result: project,
      };
    } else {
      throw new Error("Failed to add new project");
    }
  };
};

module.exports = addProject;
