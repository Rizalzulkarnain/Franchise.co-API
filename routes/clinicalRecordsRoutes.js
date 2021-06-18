const express = require('express');
const router = express.Router();

const {
  getClinicalRecords,
  addClinicalRecords,
} = require('../controller/clinicalRecordsController');

router.post('/clinical-records', addClinicalRecords);
router.get('/clinical-records', getClinicalRecords);

module.exports = router;
