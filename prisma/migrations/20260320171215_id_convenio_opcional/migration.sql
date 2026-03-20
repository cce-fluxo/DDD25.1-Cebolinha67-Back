-- DropForeignKey
ALTER TABLE "Consulta" DROP CONSTRAINT "Consulta_id_convenio_fkey";

-- AlterTable
ALTER TABLE "Consulta" ALTER COLUMN "id_convenio" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_convenio_fkey" FOREIGN KEY ("id_convenio") REFERENCES "Convenio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
