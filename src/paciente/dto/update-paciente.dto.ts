import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePacienteDto {
  @IsString()
  @IsNotEmpty()
  senha_paciente: string;

  @IsString()
  @IsNotEmpty()
  rg: string;
}
