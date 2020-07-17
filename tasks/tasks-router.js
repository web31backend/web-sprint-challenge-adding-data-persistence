let express = require('express');

let router = express.Router({
    mergeParams: true,
})

let Tasks = require('../resources/resource-model')
let { handleError } = require('../utils/services');


router.post('/', (req, res) => {
    let id = req.params.id
    let newTask = req.body;
    
    if(!newTask.description) {
        res.status(400).json({ errorMessage: "Description field required" })
    } else {
        Tasks.addTask({...newTask, project_id: id}, id)
        .then(newTask => {
            res.status(201).json(newTask);
        })
        .catch(err => {
            handleError(err, res);
        })
    }
})

router.get('/', (req, res) => {
    id = req.params.id;
    Tasks.findById(id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        handleError(err, res);
    })
})

module.exports = router;