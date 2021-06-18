const express = require('express');
const router = express.Router();

const {
  getAppointment,
  addAppointment,
} = require('../controller/appointmentController');

router.post('/appointment', addAppointment);
router.get('/appointment', getAppointment);

module.exports = router;
