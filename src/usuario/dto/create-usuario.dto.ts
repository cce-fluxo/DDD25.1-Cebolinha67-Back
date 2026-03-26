// quem esteve aqui (coloca seu nome smp que entrar pf): motta

import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Genero } from "src/generated/prisma/enums";
import { Type } from "class-transformer";

export class CreateUsuarioDto {

  @IsNotEmpty()
  @ApiProperty({ description: 'nome do usuário', example: 'João' })
  @IsString()
  no_usuario!: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'email do usuário', example: 'cebola67@gmail.com' })
  @IsString()
  @IsEmail()
  email_usuario!: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'senha do usuário', example: 'minhasenha123' })
  @IsString()
  senha_usuario!: string;  // senha do usuário vai aqui

  @IsNotEmpty()
  @ApiProperty({ description: 'cpf do usuário', example: '12345678900' })
  @IsString()
  cpf!: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'celular do usuário', example: '11999999999' })
  @IsString()
  nu_celular!: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'gênero do usuário', example: 'Masculino' })
  @IsEnum(Genero)
  genero!: Genero;

  @IsNotEmpty()
  @ApiProperty({ description: 'data de nascimento', example: '2000-01-01' })
  @Type(() => Date)
  @IsDate()
  data_nascimento!: Date;

  @ApiProperty({ description: 'token de recuperação de senha', example: 'abcdefg1234567' })
  @IsString()
  @IsOptional()          // opcional pois só existe quando o usuário solicita recuperação
  token_esqueci_senha?: string;
}