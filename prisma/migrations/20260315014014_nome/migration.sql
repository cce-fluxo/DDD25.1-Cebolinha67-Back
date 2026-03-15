/*
  Warnings:

  - You are about to drop the column `CPF` on the `Usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Usuario_CPF_key";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "CPF",
ADD COLUMN     "cpf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");
