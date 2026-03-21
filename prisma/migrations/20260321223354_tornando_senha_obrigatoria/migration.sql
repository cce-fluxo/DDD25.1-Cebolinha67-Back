/*
  Warnings:

  - Made the column `senha_usuario` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "senha_usuario" SET NOT NULL;
