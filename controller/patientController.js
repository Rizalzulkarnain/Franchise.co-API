const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addPatient = async (req, res) => {
  try {
    const {
      name,
      date_of_birth,
      gender,
      phone,
      email,
      address,
      occupation,
      family_member,
    } = req.body;
    const patientUser = await prisma.patient.create({
      data: {
        name: name,
        date_of_birth: date_of_birth,
        gender: gender,
        email: email,
        phone: phone,
        address: address,
        occupation: occupation,
        family_member: family_member,
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

const getPatient = async (req, res) => {
  try {
    const patients = await prisma.patient.findMany();

    if (!patients)
      return res.status(404).json({
        success: false,
        message: 'Patient Not Found!,.',
      });

    res.status(200).json({
      success: true,
      data: patients,
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
  getPatient,
  addPatient,
};
