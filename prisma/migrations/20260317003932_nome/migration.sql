/*
  Warnings:

  - The primary key for the `PostagemPaciente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PostagemPaciente` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PostagemPaciente_id_paciente_id_postagem_key";

-- AlterTable
ALTER TABLE "PostagemPaciente" DROP CONSTRAINT "PostagemPaciente_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "PostagemPaciente_pkey" PRIMARY KEY ("id_paciente", "id_postagem");
