const express = require('express');
const router = express.Router();

const { getPatient, addPatient } = require('../controller/patientController');

router.post('/patients', addPatient);
router.get('/patients', getPatient);

module.exports = router;
