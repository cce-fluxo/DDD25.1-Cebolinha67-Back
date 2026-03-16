/*
  Warnings:

  - You are about to drop the column `data` on the `Postagem` table. All the data in the column will be lost.
  - You are about to alter the column `titulo` on the `Postagem` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - A unique constraint covering the columns `[url]` on the table `Imagem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_imagem,id_usuario]` on the table `ImagemUsuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario,id_notificacao]` on the table `NotificacaoUsuario` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `tipo` on the `Postagem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoPostagem" AS ENUM ('geral', 'individual');

-- DropIndex
DROP INDEX "DetalheDaConsulta_tipo_pagamento_key";

-- AlterTable
ALTER TABLE "Postagem" DROP COLUMN "data",
ADD COLUMN     "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "titulo" SET DATA TYPE VARCHAR(150),
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoPostagem" NOT NULL;

-- CreateTable
CREATE TABLE "PostagemPaciente" (
    "id" SERIAL NOT NULL,
    "id_postagem" INTEGER NOT NULL,
    "id_paciente" INTEGER NOT NULL,

    CONSTRAINT "PostagemPaciente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostagemPaciente_id_postagem_key" ON "PostagemPaciente"("id_postagem");

-- CreateIndex
CREATE UNIQUE INDEX "PostagemPaciente_id_paciente_key" ON "PostagemPaciente"("id_paciente");

-- CreateIndex
CREATE UNIQUE INDEX "PostagemPaciente_id_paciente_id_postagem_key" ON "PostagemPaciente"("id_paciente", "id_postagem");

-- CreateIndex
CREATE UNIQUE INDEX "Imagem_url_key" ON "Imagem"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ImagemUsuario_id_imagem_id_usuario_key" ON "ImagemUsuario"("id_imagem", "id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "NotificacaoUsuario_id_usuario_id_notificacao_key" ON "NotificacaoUsuario"("id_usuario", "id_notificacao");

-- CreateIndex
CREATE INDEX "Postagem_tipo_idx" ON "Postagem"("tipo");

-- AddForeignKey
ALTER TABLE "PostagemPaciente" ADD CONSTRAINT "PostagemPaciente_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostagemPaciente" ADD CONSTRAINT "PostagemPaciente_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
