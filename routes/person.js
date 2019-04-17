const express = require('express');
const personRouter = express.Router();
const personController = require('../controllers/person');

personRouter.get('/', personController.list);
personRouter.post('/add', personController.create);
personRouter.post('/update', personController.update);
personRouter.post('/delete', personController.delete);

module.exports = personRouter;