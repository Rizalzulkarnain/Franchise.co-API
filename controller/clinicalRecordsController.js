const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addClinicalRecords = async (req, res) => {
  try {
    const {
      medical_history,
      treatment_plan,
      clinical_notes,
      dental_image,
      dental_report,
      patient_id,
      dentist_id,
    } = req.body;
    const clinicalRecords = await prisma.clinnical_Report.create({
      data: {
        medical_history,
        treatment_plan,
        clinical_notes,
        dental_image,
        dental_report,
        patient_id,
        dentist_id,
      },
    });

    res.status(200).json({
      success: true,
      data: clinicalRecords,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getClinicalRecords = async (req, res) => {
  try {
    const clinicalRecords = await prisma.clinnical_Report.findMany({
      include: {
        patient: true,
        dentist: true,
      },
    });

    if (!clinicalRecords)
      return res.status(404).json({
        success: false,
        message: 'Clinical Records Not Found!.',
      });

    res.status(200).json({
      success: true,
      data: clinicalRecords,
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
  getClinicalRecords,
  addClinicalRecords,
};
