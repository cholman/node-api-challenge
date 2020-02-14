const express = require('express');

const server = express();

const projectRouter = require('./projects/projectRouter.js')
const actionRouter = require('./actions/actionRouter.js');

server.use(express.json());

server.use('/api/projects', logger, projectRouter);
server.use('/api/actions', logger, actionRouter);

server.get('/', logger, (req, res) => {
    res.send(`<h2> hello world sdfsdf </h2>`);
})

function logger(req, res, next) {
    console.log(`${req.method} Request to ${req.originalUrl} at ${Date()}`);
    next();
} 

module.exports = server;