-- CreateEnum
CREATE TYPE "tipo_pagamento" AS ENUM ('Particular', 'Convenio');

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "no_usuario" TEXT NOT NULL,
    "email_usuario" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "NU_celular" TEXT NOT NULL,
    "Genero" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "token_esqueci_senha" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dentista" (
    "id" SERIAL NOT NULL,
    "senha_dentista" TEXT NOT NULL,
    "formacao" TEXT NOT NULL,
    "Instituto" TEXT NOT NULL,
    "DataInicio" TIMESTAMP(3) NOT NULL,
    "DataTermino" TIMESTAMP(3) NOT NULL,
    "Especializacao" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "dentista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "senha_paciente" TEXT NOT NULL,
    "RG" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacao" (
    "id" SERIAL NOT NULL,
    "id_notificacao" INTEGER NOT NULL,
    "DS_mensagem" TEXT NOT NULL,
    "lido" BOOLEAN NOT NULL,
    "titulo" TEXT NOT NULL,
    "simbolo" TEXT NOT NULL,

    CONSTRAINT "notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacao_usuario" (
    "id" SERIAL NOT NULL,
    "id_notificacao" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_consulta" INTEGER,

    CONSTRAINT "notificacao_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagem" (
    "id" SERIAL NOT NULL,
    "URL" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,

    CONSTRAINT "imagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagem_usuario" (
    "id" SERIAL NOT NULL,
    "id_imagem" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "imagem_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagem_postagem" (
    "id" SERIAL NOT NULL,
    "id_imagem" INTEGER NOT NULL,
    "id_postagem" INTEGER NOT NULL,

    CONSTRAINT "imagem_postagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "data_criacao_endereco" TIMESTAMP(3) NOT NULL,
    "logradouro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "id_dentista" INTEGER NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta" (
    "id" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_dentista" INTEGER NOT NULL,
    "id_convenio" INTEGER NOT NULL,
    "id_endereco" INTEGER NOT NULL,

    CONSTRAINT "consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalhe_da_consulta" (
    "id" SERIAL NOT NULL,
    "DH" TIMESTAMP(3) NOT NULL,
    "valor" INTEGER NOT NULL,
    "tipo_pagamento" "tipo_pagamento" NOT NULL,
    "status" TEXT NOT NULL,
    "tipo_consulta" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "id_consulta" INTEGER NOT NULL,

    CONSTRAINT "detalhe_da_consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postagem" (
    "id" SERIAL NOT NULL,
    "id_postagem" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "id_dentista" INTEGER NOT NULL,

    CONSTRAINT "postagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "convenio" (
    "id" SERIAL NOT NULL,
    "id_convenio" INTEGER NOT NULL,
    "NO_operadora" TEXT NOT NULL,
    "NU_carteirinha" TEXT NOT NULL,
    "DT_val_carteirinha" TIMESTAMP(3) NOT NULL,
    "id_paciente" INTEGER NOT NULL,

    CONSTRAINT "convenio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documento" (
    "id" SERIAL NOT NULL,
    "id_documento" INTEGER NOT NULL,
    "nome_doc" TEXT NOT NULL,
    "tipo_doc" TEXT NOT NULL,
    "extensao" TEXT NOT NULL,
    "tamanho_doc" DOUBLE PRECISION NOT NULL,
    "id_consulta" INTEGER NOT NULL,

    CONSTRAINT "documento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_usuario_key" ON "usuario"("email_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_CPF_key" ON "usuario"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_NU_celular_key" ON "usuario"("NU_celular");

-- CreateIndex
CREATE UNIQUE INDEX "dentista_id_usuario_key" ON "dentista"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "paciente_RG_key" ON "paciente"("RG");

-- CreateIndex
CREATE UNIQUE INDEX "paciente_id_usuario_key" ON "paciente"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "notificacao_usuario_id_notificacao_key" ON "notificacao_usuario"("id_notificacao");

-- CreateIndex
CREATE UNIQUE INDEX "notificacao_usuario_id_usuario_key" ON "notificacao_usuario"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "notificacao_usuario_id_consulta_key" ON "notificacao_usuario"("id_consulta");

-- CreateIndex
CREATE UNIQUE INDEX "imagem_usuario_id_imagem_key" ON "imagem_usuario"("id_imagem");

-- CreateIndex
CREATE UNIQUE INDEX "imagem_usuario_id_usuario_key" ON "imagem_usuario"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "imagem_postagem_id_imagem_key" ON "imagem_postagem"("id_imagem");

-- CreateIndex
CREATE UNIQUE INDEX "imagem_postagem_id_postagem_key" ON "imagem_postagem"("id_postagem");

-- CreateIndex
CREATE UNIQUE INDEX "endereco_id_dentista_key" ON "endereco"("id_dentista");

-- CreateIndex
CREATE UNIQUE INDEX "consulta_id_paciente_key" ON "consulta"("id_paciente");

-- CreateIndex
CREATE UNIQUE INDEX "consulta_id_dentista_key" ON "consulta"("id_dentista");

-- CreateIndex
CREATE UNIQUE INDEX "consulta_id_convenio_key" ON "consulta"("id_convenio");

-- CreateIndex
CREATE UNIQUE INDEX "consulta_id_endereco_key" ON "consulta"("id_endereco");

-- CreateIndex
CREATE UNIQUE INDEX "detalhe_da_consulta_tipo_pagamento_key" ON "detalhe_da_consulta"("tipo_pagamento");

-- CreateIndex
CREATE UNIQUE INDEX "detalhe_da_consulta_id_consulta_key" ON "detalhe_da_consulta"("id_consulta");

-- CreateIndex
CREATE UNIQUE INDEX "postagem_id_dentista_key" ON "postagem"("id_dentista");

-- CreateIndex
CREATE UNIQUE INDEX "convenio_id_paciente_key" ON "convenio"("id_paciente");

-- CreateIndex
CREATE UNIQUE INDEX "documento_id_consulta_key" ON "documento"("id_consulta");

-- AddForeignKey
ALTER TABLE "dentista" ADD CONSTRAINT "dentista_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacao_usuario" ADD CONSTRAINT "notificacao_usuario_id_notificacao_fkey" FOREIGN KEY ("id_notificacao") REFERENCES "notificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacao_usuario" ADD CONSTRAINT "notificacao_usuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacao_usuario" ADD CONSTRAINT "notificacao_usuario_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "consulta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagem_usuario" ADD CONSTRAINT "imagem_usuario_id_imagem_fkey" FOREIGN KEY ("id_imagem") REFERENCES "imagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagem_usuario" ADD CONSTRAINT "imagem_usuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagem_postagem" ADD CONSTRAINT "imagem_postagem_id_imagem_fkey" FOREIGN KEY ("id_imagem") REFERENCES "imagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagem_postagem" ADD CONSTRAINT "imagem_postagem_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "postagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_id_dentista_fkey" FOREIGN KEY ("id_dentista") REFERENCES "dentista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_dentista_fkey" FOREIGN KEY ("id_dentista") REFERENCES "dentista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_convenio_fkey" FOREIGN KEY ("id_convenio") REFERENCES "convenio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalhe_da_consulta" ADD CONSTRAINT "detalhe_da_consulta_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postagem" ADD CONSTRAINT "postagem_id_dentista_fkey" FOREIGN KEY ("id_dentista") REFERENCES "dentista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convenio" ADD CONSTRAINT "convenio_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento" ADD CONSTRAINT "documento_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
