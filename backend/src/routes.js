const express = require('express');

const ControllerOng = require('./controller/controllerOngs');
const ControllerIncidents = require('./controller/controllerIncidents');
const ControllerProfile = require('./controller/controllerProfile');
const ControllerSession = require('./controller/controllerSession');

const router = express.Router();

router.post('/sessions', ControllerSession.createOng);

router.get('/ongs', ControllerOng.getOngs);
router.post('/ongs', ControllerOng.createOng);

router.get('/profile', ControllerProfile.getSpecificIncident);

router.get('/incidents', ControllerIncidents.getIncidents);
router.post('/incidents', ControllerIncidents.createIncident);
router.delete('/incidents/:id', ControllerIncidents.deleteIncident);

module.exports = router;
