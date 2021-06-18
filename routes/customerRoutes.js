const express = require('express');
const router = express.Router();

const {
  getCustomer,
  addCustomer,
} = require('../controller/customerController');

router.post('/customer', addCustomer);
router.get('/customer', getCustomer);

module.exports = router;
