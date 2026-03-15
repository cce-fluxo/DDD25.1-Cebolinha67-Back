/*
  Warnings:

  - You are about to drop the column `id_convenio` on the `Convenio` table. All the data in the column will be lost.
  - You are about to drop the column `id_documento` on the `Documento` table. All the data in the column will be lost.
  - You are about to drop the column `id_notificacao` on the `Notificacao` table. All the data in the column will be lost.
  - You are about to drop the column `id_postagem` on the `Postagem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Convenio" DROP COLUMN "id_convenio";

-- AlterTable
ALTER TABLE "Documento" DROP COLUMN "id_documento";

-- AlterTable
ALTER TABLE "Notificacao" DROP COLUMN "id_notificacao";

-- AlterTable
ALTER TABLE "Postagem" DROP COLUMN "id_postagem";
