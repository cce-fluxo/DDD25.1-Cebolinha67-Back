import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConvenioDto {
  @ApiProperty({
    example: 'Amil',
    description: 'Nome da operadora do convênio',
  })
  @IsString()
  @IsNotEmpty()
  no_operadora: string;

  @ApiProperty({
    example: '1234567890',
    description: 'Número da carteirinha',
  })
  @IsString()
  @IsNotEmpty()
  nu_carteirinha: string;

  @ApiProperty({
    example: '2027-12-31',
    description: 'Data de validade da carteirinha',
  })
  @IsDateString()
  dt_val_carteirinha: string;

  @ApiProperty({
    example: 1,
    description: 'ID do paciente associado ao convênio',
  })
  @Type(() => Number)
  @IsInt()
  id_paciente: number;
}