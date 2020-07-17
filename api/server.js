let express = require("express");
let helmet = require("helmet");
let cors = require('cors');

let server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/api', (req, res) => {
    res.status(200).json({ api: "UP" })
})

module.exports = server;