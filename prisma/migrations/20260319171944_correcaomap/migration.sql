/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dentista" DROP CONSTRAINT "Dentista_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "ImagemUsuario" DROP CONSTRAINT "ImagemUsuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "NotificacaoUsuario" DROP CONSTRAINT "NotificacaoUsuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_id_usuario_fkey";

-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "no_usuario" TEXT NOT NULL,
    "email_usuario" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nu_celular" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "token_esqueci_senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_usuario_key" ON "Usuario"("email_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nu_celular_key" ON "Usuario"("nu_celular");

-- AddForeignKey
ALTER TABLE "Dentista" ADD CONSTRAINT "Dentista_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificacaoUsuario" ADD CONSTRAINT "NotificacaoUsuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemUsuario" ADD CONSTRAINT "ImagemUsuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
