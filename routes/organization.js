const express = require('express');
const organizationRouter = express.Router();
const organizationController = require('../controllers/organization');

organizationRouter.get('/', organizationController.list);
organizationRouter.post('/add', organizationController.create);
organizationRouter.post('/update', organizationController.update);
organizationRouter.post('/delete', organizationController.delete);
organizationRouter.post('/addPerson', organizationController.addPerson);
organizationRouter.post('/deletePerson', organizationController.deletePerson);

module.exports = organizationRouter;