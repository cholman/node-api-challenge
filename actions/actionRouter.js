const express = require('express');

const Actions = require('../data/helpers/actionModel.js');

const router = express.Router();

// api/actions
router.get('/', (req, res) => {
    console.log(req.query);
    Actions.get()
        .then(actions => {
            console.log(actions)
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "failed to get actions"})
        })
});


router.post('/', (req, res) => {
    console.log(req.body)
    Actions.insert(req.body)
    .then(post => {
        res.status(201).json(post)
    })
    .catch(err => {
        res.status(500).json({
            message: 'error adding post'
        })
    })
})

router.delete(`/:id`, (req, res) => {
    Actions.remove(req.params.id)
        .then(post => {
            res.status(200).json({message: "post was deleted"})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errorMessage: "failed to delete"})
        })
})

router.put('/:id', (req, res)=>{
    Actions.update(req.params.id, req.body)
        .then(post => {
            res.status(200).json({message: "updated success"})
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "error updating"})
        })
})

module.exports = router;