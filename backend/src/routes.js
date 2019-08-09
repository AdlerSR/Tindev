const express = require('express');
const DevController = require('./controllers/DevControllers');
const LikeController = require('./controllers/LikeControllers')
const DislikeController = require('./controllers/DislikeControllers')

const routes = express.Router();

routes.get('/devs');
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/likes', DislikeController.store);

module.exports = routes;