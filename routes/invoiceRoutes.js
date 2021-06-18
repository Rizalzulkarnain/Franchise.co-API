const express = require('express');
const router = express.Router();

const { getInvoice, addInvoice } = require('../controller/invoiceController');

router.post('/invoice', addInvoice);
router.get('/invoice', getInvoice);

module.exports = router;
