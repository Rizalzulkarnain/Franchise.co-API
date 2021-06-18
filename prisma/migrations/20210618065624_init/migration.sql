-- CreateTable
CREATE TABLE "Dentist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
