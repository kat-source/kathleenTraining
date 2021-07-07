const db = require('../index');
const model = require('../sequelize/models/Project');

const projectQuery = require('./query')

const projectsDb = projectQuery({ model });

module.exports = projectsDb;