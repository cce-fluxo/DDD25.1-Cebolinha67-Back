import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateConvenioDto {
  @IsString()
  @IsNotEmpty()
  no_operadora: string;

  @IsString()
  @IsNotEmpty()
  nu_carteirinha: string;

  @Type(() => Date)
  @IsDateString()
  dt_val_carteirinha: string;

  @Type(() => Number)
  @IsInt()
  id_paciente: number;
}
