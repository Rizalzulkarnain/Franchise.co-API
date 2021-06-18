-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "dentist_id" INTEGER NOT NULL,
    "dental_id" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointment" ADD FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD FOREIGN KEY ("dental_id") REFERENCES "Dental_Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
