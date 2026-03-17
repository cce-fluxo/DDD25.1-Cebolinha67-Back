import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty()
  senha_paciente: string;

  @IsString()
  @IsNotEmpty()
  rg: string;

  @IsInt()
  @Type(() => Number)
  usuario: number;
}
