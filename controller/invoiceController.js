const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addInvoice = async (req, res) => {
  try {
    const { dentalService_id, appointment_id, date, amount, payment_status } =
      req.body;
    const invoice = await prisma.invoice.create({
      data: {
        dentalService_id,
        appointment_id,
        date,
        amount,
        payment_status,
      },
    });

    res.status(200).json({
      success: true,
      data: invoice,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getInvoice = async (req, res) => {
  try {
    const invoice = await prisma.invoice.findMany({
      include: {
        dental_service: true,
        appointment: true,
      },
    });

    if (!invoice)
      return res.status(404).json({
        success: false,
        message: 'Invoice Not Found!.',
      });

    res.status(200).json({
      success: true,
      data: invoice,
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
  getInvoice,
  addInvoice,
};
