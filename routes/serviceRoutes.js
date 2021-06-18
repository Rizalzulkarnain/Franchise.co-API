const express = require('express');
const router = express.Router();

const { getService, addService } = require('../controller/serviceController');

router.post('/service', addService);
router.get('/service', getService);

module.exports = router;
