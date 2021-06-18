const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addCustomer = async (req, res) => {
  try {
    const { patient_id, numberOfAppointment, total_spending } = req.body;

    const customer = await prisma.customer.create({
      data: {
        patient_id,
        numberOfAppointment,
        total_spending,
      },
    });

    res.status(200).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getCustomer = async (req, res) => {
  try {
    const customer = await prisma.customer.findMany({
      include: {
        patient: true,
      },
    });

    if (!customer)
      return res.status(404).json({
        success: false,
        message: 'Clinical Records Not Found!.',
      });

    res.status(200).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

module.exports = {
  getCustomer,
  addCustomer,
};
