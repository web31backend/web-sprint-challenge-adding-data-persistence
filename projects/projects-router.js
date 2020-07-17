let express = require('express');

let router = express.Router()

let Projects = require('../resources/resource-model')
let { handleError } = require('../utils/services');

// router.get('/', (req, res) => {
//     res.status(200).json({ message: "hey we are up" })
// })
router.get('/', (req, res) => {
    Projects.findAllProjects()// takes care of GET: /api/projects call
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        handleError(err, res);
    })
})

router.post('/', (req, res) => {
    newProject = req.body;
    if(!newProject.name) {
        res.status(400).json({ errorMessage: "Please provide a name for project"})
    } else {
        Projects.addProject(newProject)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            handleError(err, res)
        })
    }
})


module.exports = router;