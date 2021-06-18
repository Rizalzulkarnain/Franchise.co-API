/*
  Warnings:

  - Made the column `dental_report` on table `Clinnical_Report` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Clinnical_Report" ALTER COLUMN "dental_image" DROP NOT NULL,
ALTER COLUMN "dental_report" SET NOT NULL;

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "numberOfAppointment" INTEGER NOT NULL,
    "total_spending" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Customer" ADD FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
