import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePacienteDto {
  @ApiProperty({
    example: 'senha123',
    description: 'Senha do paciente',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  senha_paciente: string;

  @ApiProperty({
    example: '123456789',
    description: 'RG do paciente',
  })
  @IsString()
  @IsNotEmpty()
  rg: string;

  @ApiProperty({
    example: 1,
    description: 'ID do usuário associado',
  })
  @IsInt()
  @Type(() => Number)
  usuarioId: number;
}