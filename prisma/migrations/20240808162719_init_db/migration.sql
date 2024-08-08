/*
  Warnings:

  - You are about to drop the column `ImageUrl` on the `BarbershopService` table. All the data in the column will be lost.
  - You are about to drop the column `barberShopId` on the `BarbershopService` table. All the data in the column will be lost.
  - Added the required column `barbershopId` to the `BarbershopService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `BarbershopService` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BarbershopService" DROP CONSTRAINT "BarbershopService_barberShopId_fkey";

-- AlterTable
ALTER TABLE "BarbershopService" DROP COLUMN "ImageUrl",
DROP COLUMN "barberShopId",
ADD COLUMN     "barbershopId" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BarbershopService" ADD CONSTRAINT "BarbershopService_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "Barbershop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
