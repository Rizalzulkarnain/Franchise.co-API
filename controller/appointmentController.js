const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addAppointment = async (req, res) => {
  try {
    const { customer_id, dentist_id, dental_id, date, time, notes, status } =
      req.body;
    const appointment = await prisma.appointment.create({
      data: {
        customer_id,
        dentist_id,
        dental_id,
        date,
        time,
        notes,
        status,
      },
    });

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getAppointment = async (req, res) => {
  try {
    const appointment = await prisma.appointment.findMany({
      include: {
        dentist: true,
        customer: true,
        dental_service: true,
      },
    });

    if (!appointment)
      return res.status(404).json({
        success: false,
        message: 'Appointment Not Found!.',
      });

    res.status(200).json({
      success: true,
      data: appointment,
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
  getAppointment,
  addAppointment,
};
