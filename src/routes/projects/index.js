const express = require('express')
const projectRouter = express.Router()
const makeExpressCallback = require('../../controller/express-callback/index');

const projectRoutes = require('./route');

const projectRoute = projectRoutes({ projectRouter, makeExpressCallback })

const services = Object.freeze({
    projectRoute
})

module.exports = services
module.exports = { projectRoute }
module.exports = projectRouter