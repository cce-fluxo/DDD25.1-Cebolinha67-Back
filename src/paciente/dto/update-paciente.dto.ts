import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePacienteDto {
  @ApiPropertyOptional({
    example: 'novaSenha123',
    description: 'Nova senha do paciente',
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  senha_paciente?: string;

  @ApiPropertyOptional({
    example: '123456789',
    description: 'RG do paciente',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  rg?: string;
}