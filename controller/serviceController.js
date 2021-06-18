const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addService = async (req, res) => {
  try {
    const { service_name, service_type, price, dentist_type, duration } =
      req.body;
    const dentalService = await prisma.dental_Service.create({
      data: {
        service_name,
        service_type,
        price,
        dentist_type,
        duration,
      },
    });

    res.status(200).json({
      success: true,
      data: dentalService,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getService = async (req, res) => {
  try {
    const dentalService = await prisma.dental_Service.findMany();

    if (!dentalService)
      return res.status(404).json({
        success: false,
        message: 'Dental Service Not Found!,.',
      });

    res.status(200).json({
      success: true,
      data: dentalService,
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
  getService,
  addService,
};
