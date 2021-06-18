-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "dentalService_id" INTEGER NOT NULL,
    "appointment_id" INTEGER NOT NULL,
    "Date" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "payment_status" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD FOREIGN KEY ("dentalService_id") REFERENCES "Dental_Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
