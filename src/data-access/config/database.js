require('dotenv').config()

const Sequelize = require('sequelize');


const db = new Sequelize(
  process.env.PGDATABASE, 
  process.env.PGUSER, 
  process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    //logging: false,

    
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

  module.exports = db;