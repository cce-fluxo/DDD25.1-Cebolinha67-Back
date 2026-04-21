import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsISO8601, IsOptional, IsString } from "class-validator";
import { TipoPagamento } from "src/generated/prisma/enums";

export class CreateConsultaDto {

  @ApiProperty({
    description: 'esse campo é o id_paciente',
    example: 1,
  })
  @IsInt()
  id_paciente: number;

  @ApiProperty({
    description: 'esse campo é o id_dentista',
    example: 1,
  })
  @IsInt()
  id_dentista: number;

  @ApiProperty({
    description: 'esse campo é o id_convenio',
    example: 1,
  })
  @IsInt()
  @IsOptional()
  id_convenio?: number;

  @ApiProperty({
    description: 'esse campo é o id_endereco',
    example: 1,
  })
  @IsInt()
  id_endereco: number;

  @ApiProperty({
    description: 'Data e hora do evento (formato ISO 8601)',
    example: '2026-03-20T15:16:00.000Z',  // exemplo real e atual (baseado na sua hora -03:00)
    type: String,  // ajuda o Swagger
  })
  @IsISO8601({ strict: true })   // strict: true → valida se a data é real (ex: não aceita 30/02)
  dh: string;

  @ApiProperty({
    description: 'esse campo é o id_endereco',
    example: 0,
  })
  @IsInt()
  valor: number;

  @ApiProperty({
    description: 'esse campo é o id_endereco',
    example: "convenio",
  })
  @IsEnum(TipoPagamento)
  tipo_pagamento: TipoPagamento;

  @ApiProperty({
    description: 'esse campo é o id_endereco',
    example: 'realizada',
  })
  @IsString()
  status: string;

  @ApiProperty({
    description: 'esse campo é o id_endereco',
    example: 'Obturação',
  })
  @IsString()
  tipo_consulta: string;

  @ApiProperty({
    description: 'esse campo é o id_endereco',
    example: 'dor de dente',
  })
  @IsString()
  motivo: string;

}