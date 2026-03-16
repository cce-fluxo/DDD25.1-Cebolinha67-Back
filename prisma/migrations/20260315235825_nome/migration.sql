/*
  Warnings:

  - A unique constraint covering the columns `[id_imagem,id_postagem]` on the table `ImagemPostagem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ImagemPostagem_id_imagem_id_postagem_key" ON "ImagemPostagem"("id_imagem", "id_postagem");
