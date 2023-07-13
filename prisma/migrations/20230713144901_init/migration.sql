/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN "key" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_key_key" ON "Category"("key");
