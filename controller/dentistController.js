const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addDentist = async (req, res) => {
  try {
    const { name, address, phone, email, gender, date_of_birth, type } =
      req.body;
    const patientUser = await prisma.dentist.create({
      data: {
        name,
        address,
        phone,
        email,
        gender,
        date_of_birth,
        type,
      },
    });

    res.status(200).json({
      success: true,
      data: patientUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getDentist = async (req, res) => {
  try {
    const dentist = await prisma.dentist.findMany();

    if (!dentist)
      return res.status(404).json({
        success: false,
        message: 'Dentist Not Found!.',
      });

    res.status(200).json({
      success: true,
      data: dentist,
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
  getDentist,
  addDentist,
};
