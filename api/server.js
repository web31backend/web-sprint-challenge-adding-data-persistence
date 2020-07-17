let express = require("express");
let helmet = require("helmet");
let cors = require('cors');

let resourceRoutes = require('../resources/resource-router');
let projectRoutes = require('../projects/projects-router');

let server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/resources', resourceRoutes)
server.use('/api/projects', projectRoutes) 

server.get('/api', (req, res) => {
    res.status(200).json({ api: "UP" })
})

module.exports = server;