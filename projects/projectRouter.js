const express = require('express');

const Projects = require('../data/helpers/projectModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.query, "get request query")
    //req.query???
    Projects.get()
        .then(projects => {
            console.log(projects)
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({errorMessage: "failed to get projects"})
        })
})

router.get('/:id/actions', (req, res) => {
    console.log(req.params);
    Projects.getProjectActions(req.params.id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({errorMessage: "error getting actions"})
        })
})

router.post('/', (req, res) => {
    //console.log(req.body)
    Projects.insert(req.body)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json({errorMessage:"error adding post"})
        })
})

router.delete('/:id', (req, res) => {
    console.log(req)
    Projects.remove(req.params.id)
        .then(post => {
            res.status(200).json({ message: "post was deleted"})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errorMessage: "failed to delete"})
        })
})

router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
        .then(post => {
            res.status(200).json({message: "post updated successfully"})
        })
        .catch(err => {
            res.status(500).json({ errorMessage:"error updating post"})
        })
})
module.exports = router;