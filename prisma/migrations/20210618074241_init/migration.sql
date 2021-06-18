-- CreateTable
CREATE TABLE "Clinnical_Report" (
    "id" SERIAL NOT NULL,
    "medical_history" TEXT NOT NULL,
    "treatment_plan" TEXT NOT NULL,
    "clinical_notes" TEXT NOT NULL,
    "dental_image" TEXT NOT NULL,
    "dental_report" TEXT,
    "patient_id" INTEGER NOT NULL,
    "dentist_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Clinnical_Report" ADD FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinnical_Report" ADD FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
