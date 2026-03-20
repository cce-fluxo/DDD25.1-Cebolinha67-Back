import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsString } from "class-validator";
import { TipoPagamento } from "src/generated/prisma/enums";

export class CreateConsultaDto {

  @ApiProperty()
  @IsInt()
  id_paciente: number;

  @ApiProperty()
  @IsInt()
  id_dentista: number;

  @ApiProperty()
  @IsInt()
  id_convenio?: number;

  @ApiProperty()
  @IsInt()
  id_endereco: number;

  @ApiProperty()
  @IsString()
  dh: string;

  @ApiProperty()
  @IsInt()
  valor: number;

  @ApiProperty()
  @IsEnum(TipoPagamento)
  tipo_pagamento: TipoPagamento;

  @ApiProperty()
  @IsString()
  status: string;
  @ApiProperty()
  @IsString()
  tipo_consulta: string;
  @ApiProperty()
  @IsString()
  motivo: string;

}