-- DropForeignKey
ALTER TABLE "DetalheDaConsulta" DROP CONSTRAINT "DetalheDaConsulta_id_consulta_fkey";

-- AddForeignKey
ALTER TABLE "DetalheDaConsulta" ADD CONSTRAINT "DetalheDaConsulta_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "Consulta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
