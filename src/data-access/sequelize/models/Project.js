const sequelize = require('sequelize');
const db = require('../../config/database');

const Project = db.define('project', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    budget: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
    
});


module.exports = Project;