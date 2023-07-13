/*
  Warnings:

  - A unique constraint covering the columns `[order]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN "order" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Category_order_key" ON "Category"("order");
