/*
  Warnings:

  - You are about to drop the column `senha_dentista` on the `Dentista` table. All the data in the column will be lost.
  - You are about to drop the column `senha_paciente` on the `Paciente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dentista" DROP COLUMN "senha_dentista";

-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "senha_paciente";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "senha_usuario" TEXT,
ALTER COLUMN "token_esqueci_senha" DROP NOT NULL;
