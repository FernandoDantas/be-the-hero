const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/*ROUTES LOGIN */
routes.post('/sessions', SessionController.create);

/*ROUTES ONGS */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/*ROUTES PROFILE */
routes.get('/profile', ProfileController.index);

/*ROUTES INCIDENTS*/
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;