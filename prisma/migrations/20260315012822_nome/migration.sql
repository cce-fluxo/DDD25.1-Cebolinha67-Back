/*
  Warnings:

  - You are about to drop the `consulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `convenio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dentista` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `detalhe_da_consulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `documento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `endereco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagem_postagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagem_usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificacao_usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoPagamento" AS ENUM ('particular', 'convenio');

-- DropForeignKey
ALTER TABLE "consulta" DROP CONSTRAINT "consulta_id_convenio_fkey";

-- DropForeignKey
ALTER TABLE "consulta" DROP CONSTRAINT "consulta_id_dentista_fkey";

-- DropForeignKey
ALTER TABLE "consulta" DROP CONSTRAINT "consulta_id_endereco_fkey";

-- DropForeignKey
ALTER TABLE "consulta" DROP CONSTRAINT "consulta_id_paciente_fkey";

-- DropForeignKey
ALTER TABLE "convenio" DROP CONSTRAINT "convenio_id_paciente_fkey";

-- DropForeignKey
ALTER TABLE "dentista" DROP CONSTRAINT "dentista_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "detalhe_da_consulta" DROP CONSTRAINT "detalhe_da_consulta_id_consulta_fkey";

-- DropForeignKey
ALTER TABLE "documento" DROP CONSTRAINT "documento_id_consulta_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_id_dentista_fkey";

-- DropForeignKey
ALTER TABLE "imagem_postagem" DROP CONSTRAINT "imagem_postagem_id_imagem_fkey";

-- DropForeignKey
ALTER TABLE "imagem_postagem" DROP CONSTRAINT "imagem_postagem_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "imagem_usuario" DROP CONSTRAINT "imagem_usuario_id_imagem_fkey";

-- DropForeignKey
ALTER TABLE "imagem_usuario" DROP CONSTRAINT "imagem_usuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "notificacao_usuario" DROP CONSTRAINT "notificacao_usuario_id_consulta_fkey";

-- DropForeignKey
ALTER TABLE "notificacao_usuario" DROP CONSTRAINT "notificacao_usuario_id_notificacao_fkey";

-- DropForeignKey
ALTER TABLE "notificacao_usuario" DROP CONSTRAINT "notificacao_usuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "paciente" DROP CONSTRAINT "paciente_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "postagem" DROP CONSTRAINT "postagem_id_dentista_fkey";

-- DropTable
DROP TABLE "consulta";

-- DropTable
DROP TABLE "convenio";

-- DropTable
DROP TABLE "dentista";

-- DropTable
DROP TABLE "detalhe_da_consulta";

-- DropTable
DROP TABLE "documento";

-- DropTable
DROP TABLE "endereco";

-- DropTable
DROP TABLE "imagem";

-- DropTable
DROP TABLE "imagem_postagem";

-- DropTable
DROP TABLE "imagem_usuario";

-- DropTable
DROP TABLE "notificacao";

-- DropTable
DROP TABLE "notificacao_usuario";

-- DropTable
DROP TABLE "paciente";

-- DropTable
DROP TABLE "postagem";

-- DropTable
DROP TABLE "usuario";

-- DropEnum
DROP TYPE "tipo_pagamento";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "no_usuario" TEXT NOT NULL,
    "email_usuario" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "nu_celular" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "token_esqueci_senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dentista" (
    "id" SERIAL NOT NULL,
    "senha_dentista" TEXT NOT NULL,
    "formacao" TEXT NOT NULL,
    "instituto" TEXT NOT NULL,
    "datainicio" TIMESTAMP(3) NOT NULL,
    "datatermino" TIMESTAMP(3) NOT NULL,
    "especializacao" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Dentista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "senha_paciente" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacao" (
    "id" SERIAL NOT NULL,
    "id_notificacao" INTEGER NOT NULL,
    "ds_mensagem" TEXT NOT NULL,
    "lido" BOOLEAN NOT NULL,
    "titulo" TEXT NOT NULL,
    "simbolo" TEXT NOT NULL,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificacaoUsuario" (
    "id" SERIAL NOT NULL,
    "id_notificacao" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_consulta" INTEGER,

    CONSTRAINT "NotificacaoUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imagem" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Imagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagemUsuario" (
    "id" SERIAL NOT NULL,
    "id_imagem" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "ImagemUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagemPostagem" (
    "id" SERIAL NOT NULL,
    "id_imagem" INTEGER NOT NULL,
    "id_postagem" INTEGER NOT NULL,

    CONSTRAINT "ImagemPostagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "data_criacao_endereco" TIMESTAMP(3) NOT NULL,
    "logradouro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "id_dentista" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_dentista" INTEGER NOT NULL,
    "id_convenio" INTEGER NOT NULL,
    "id_endereco" INTEGER NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalheDaConsulta" (
    "id" SERIAL NOT NULL,
    "DH" TIMESTAMP(3) NOT NULL,
    "valor" INTEGER NOT NULL,
    "tipo_pagamento" "TipoPagamento" NOT NULL,
    "status" TEXT NOT NULL,
    "tipo_consulta" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "id_consulta" INTEGER NOT NULL,

    CONSTRAINT "DetalheDaConsulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Postagem" (
    "id" SERIAL NOT NULL,
    "id_postagem" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "id_dentista" INTEGER NOT NULL,

    CONSTRAINT "Postagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Convenio" (
    "id" SERIAL NOT NULL,
    "id_convenio" INTEGER NOT NULL,
    "no_operadora" TEXT NOT NULL,
    "nu_carteirinha" TEXT NOT NULL,
    "dt_val_carteirinha" TIMESTAMP(3) NOT NULL,
    "id_paciente" INTEGER NOT NULL,

    CONSTRAINT "Convenio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documento" (
    "id" SERIAL NOT NULL,
    "id_documento" INTEGER NOT NULL,
    "nome_doc" TEXT NOT NULL,
    "tipo_doc" TEXT NOT NULL,
    "extensao" TEXT NOT NULL,
    "tamanho_doc" DOUBLE PRECISION NOT NULL,
    "id_consulta" INTEGER NOT NULL,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_usuario_key" ON "Usuario"("email_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_CPF_key" ON "Usuario"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nu_celular_key" ON "Usuario"("nu_celular");

-- CreateIndex
CREATE UNIQUE INDEX "Dentista_id_usuario_key" ON "Dentista"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_rg_key" ON "Paciente"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_id_usuario_key" ON "Paciente"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "NotificacaoUsuario_id_notificacao_key" ON "NotificacaoUsuario"("id_notificacao");

-- CreateIndex
CREATE UNIQUE INDEX "NotificacaoUsuario_id_usuario_key" ON "NotificacaoUsuario"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "NotificacaoUsuario_id_consulta_key" ON "NotificacaoUsuario"("id_consulta");

-- CreateIndex
CREATE UNIQUE INDEX "ImagemUsuario_id_imagem_key" ON "ImagemUsuario"("id_imagem");

-- CreateIndex
CREATE UNIQUE INDEX "ImagemUsuario_id_usuario_key" ON "ImagemUsuario"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ImagemPostagem_id_imagem_key" ON "ImagemPostagem"("id_imagem");

-- CreateIndex
CREATE UNIQUE INDEX "ImagemPostagem_id_postagem_key" ON "ImagemPostagem"("id_postagem");

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_id_dentista_key" ON "Endereco"("id_dentista");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_paciente_key" ON "Consulta"("id_paciente");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_dentista_key" ON "Consulta"("id_dentista");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_convenio_key" ON "Consulta"("id_convenio");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_endereco_key" ON "Consulta"("id_endereco");

-- CreateIndex
CREATE UNIQUE INDEX "DetalheDaConsulta_tipo_pagamento_key" ON "DetalheDaConsulta"("tipo_pagamento");

-- CreateIndex
CREATE UNIQUE INDEX "DetalheDaConsulta_id_consulta_key" ON "DetalheDaConsulta"("id_consulta");

-- CreateIndex
CREATE UNIQUE INDEX "Postagem_id_dentista_key" ON "Postagem"("id_dentista");

-- CreateIndex
CREATE UNIQUE INDEX "Convenio_id_paciente_key" ON "Convenio"("id_paciente");

-- CreateIndex
CREATE UNIQUE INDEX "Documento_id_consulta_key" ON "Documento"("id_consulta");

-- AddForeignKey
ALTER TABLE "Dentista" ADD CONSTRAINT "Dentista_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificacaoUsuario" ADD CONSTRAINT "NotificacaoUsuario_id_notificacao_fkey" FOREIGN KEY ("id_notificacao") REFERENCES "Notificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificacaoUsuario" ADD CONSTRAINT "NotificacaoUsuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificacaoUsuario" ADD CONSTRAINT "NotificacaoUsuario_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "Consulta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemUsuario" ADD CONSTRAINT "ImagemUsuario_id_imagem_fkey" FOREIGN KEY ("id_imagem") REFERENCES "Imagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemUsuario" ADD CONSTRAINT "ImagemUsuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemPostagem" ADD CONSTRAINT "ImagemPostagem_id_imagem_fkey" FOREIGN KEY ("id_imagem") REFERENCES "Imagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemPostagem" ADD CONSTRAINT "ImagemPostagem_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_id_dentista_fkey" FOREIGN KEY ("id_dentista") REFERENCES "Dentista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_dentista_fkey" FOREIGN KEY ("id_dentista") REFERENCES "Dentista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_convenio_fkey" FOREIGN KEY ("id_convenio") REFERENCES "Convenio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalheDaConsulta" ADD CONSTRAINT "DetalheDaConsulta_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Postagem" ADD CONSTRAINT "Postagem_id_dentista_fkey" FOREIGN KEY ("id_dentista") REFERENCES "Dentista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Convenio" ADD CONSTRAINT "Convenio_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
