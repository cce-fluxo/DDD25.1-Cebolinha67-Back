// quem esteve aqui (coloca seu nome smp que entrar pf): motta

import { IsDateString, IsInt, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'esse campo é o id do usuário',
    example: 'id : 1',
  })
  @IsInt()
  id_usuario!: number;

  @ApiProperty({
    description: 'esse campo é o nome do usuário',
    example: 'nome : João',
  })
  @IsString()
  no_usuario!: string;

  @ApiProperty({
    description: 'esse campo é o email do usuário',
    example: 'email : cebola67@gmail.com',
  })
  @IsString()
  email_usuario!: string;

  @ApiProperty({
    description: 'esse campo é a senha do usuário',
    example: 'senha : 12345678',
  })
  @IsString()
  senha_usuario!: string;

  @ApiProperty({
    description: 'esse campo é o cpf do usuário',
    example: 'cpf : 12345678900',
  })
  @IsString()
  cpf!: string;

  @ApiProperty({
    description: 'esse campo é o número do celular do usuário',
    example: 'celular : 11999999999',
  })
  @IsInt()
  nu_celular!: string;

  @ApiProperty({
    description: 'esse campo é o gênero do usuário',
    example: 'genero : M',
  })
  @IsString()
  genero!: string;
  @ApiProperty({
    description: 'esse campo é a data de nascimento do usuário',
    example: 'dt_nascimento : 2000-01-01',
  })
  @IsDateString()
  dt_nascimento!: Date;
  @ApiProperty({
    description: 'esse campo é o token para recuperação de senha do usuário',
    example: 'token_esqueci_senha : abcdefg1234567',
  })
  @IsString()
  token_esqueci_senha!: string;
}
