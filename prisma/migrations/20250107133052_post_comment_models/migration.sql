/*
  Warnings:

  - You are about to drop the column `Description` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT;
