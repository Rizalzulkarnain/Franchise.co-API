/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Patient.email_unique" ON "Patient"("email");
