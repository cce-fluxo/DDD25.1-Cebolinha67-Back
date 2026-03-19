// quem esteve aqui (coloca seu nome smp que entrar pf): motta

import { IsDate, IsDateString, IsEnum, IsInt, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Genero } from "src/generated/prisma/enums";
import { Type } from "class-transformer";

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'esse campo é o nome do usuário',
    example: 'João',
  })
  @IsString()
  no_usuario!: string;

  @ApiProperty({
    description: 'esse campo é o email do usuário',
    example: 'cebola67@gmail.com',
  })
  @IsString()
  email_usuario!: string;

  @ApiProperty({
    description: 'esse campo é o cpf do usuário',
    example: '12345678900',
  })
  @IsString()
  cpf!: string;

  @ApiProperty({
    description: 'esse campo é o número do celular do usuário',
    example: '11999999999',
  })
  @IsString()
  nu_celular!: string;

  @ApiProperty({
    description: 'esse campo é o gênero do usuário',
    example: 'Masculino',
  })
  @IsEnum(Genero)
  genero!: Genero;

  @ApiProperty({
    description: 'esse campo é a data de nascimento do usuário',
    example: '2000-01-01',
  })
  @Type(() => Date)
  @IsDate()
  data_nascimento!: Date;
  @ApiProperty({
    description: 'esse campo é o token para recuperação de senha do usuário',
    example: 'abcdefg1234567',
  })
  @IsString()
  token_esqueci_senha!: string;
}

