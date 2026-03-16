import { TipoPagamento } from "src/generated/prisma/enums";

export class CreateConsultaDto {

  id_paciente: number;

  id_dentista: number;

  id_convenio: number;

  id_endereco: number;

  dh: string;

  valor: number;

  tipo_pagamento: TipoPagamento;

  status: string;

  tipo_consulta: string;

  motivo: string;

}