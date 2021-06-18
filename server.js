const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Gaia Dental Studio',
  });
});

app.use('/api', require('./routes/patientRoutes'));
app.use('/api', require('./routes/dentistroutes'));
app.use('/api', require('./routes/serviceRoutes'));
app.use('/api', require('./routes/clinicalRecordsRoutes'));
app.use('/api', require('./routes/customerRoutes'));
app.use('/api', require('./routes/appointmentRoutes'));
app.use('/api', require('./routes/invoiceRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server Running Good on Port: ${PORT} !`));
