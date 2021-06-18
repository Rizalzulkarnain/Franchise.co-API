const express = require('express');
const router = express.Router();

const { getDentist, addDentist } = require('../controller/dentistController');

router.post('/dentist', addDentist);
router.get('/dentist', getDentist);

module.exports = router;
