let express = require('express');

let router = express.Router()
let Resources = require('./resource-model')
let { handleError } = require('../utils/services');
// router.get('/', (req, res) => {
//     res.status(200).json({ message: "hey we are up" })
// })

router.get('/', (req, res) => {
    Resources.findAllResources()
    .then(resources => {
        res.status(200).json({ data: resources });
    })
    .catch(err => {
        handleError(err, res)
    })
})

router.post('/', (req, res) => {
    let newRes = req.body;
    if(!newRes.name) {
        res.status(400).json({ errorMessage: "Name field is required"})
    } else {
        Resources.addResource(newRes)
        .then(returnedRes => {
            res.status(201).json(returnedRes);
        })
        .catch(err => {
            handleError(err, res)
        })
    }
})

module.exports = router;