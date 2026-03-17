import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateConvenioDto {
  @IsString()
  @IsNotEmpty()
  no_operadora: string;

  @IsString()
  @IsNotEmpty()
  nu_carteirinha: string;

  @IsDateString()
  dt_val_carteirinha: string;
}
