-- CreateTable
CREATE TABLE "Dental_Service" (
    "id" SERIAL NOT NULL,
    "service_name" TEXT NOT NULL,
    "service_type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "dentist_type" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
