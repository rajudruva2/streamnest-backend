/*
  Warnings:

  - You are about to alter the column `filesize` on the `Video` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "public"."Video" ALTER COLUMN "filesize" SET DATA TYPE INTEGER;
