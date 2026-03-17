import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateConvenioDto {
  @ApiPropertyOptional({
    example: 'Amil',
    description: 'Nome da operadora do convênio',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  no_operadora?: string;

  @ApiPropertyOptional({
    example: '1234567890',
    description: 'Número da carteirinha do convênio',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nu_carteirinha?: string;

  @ApiPropertyOptional({
    example: '2027-12-31',
    description: 'Data de validade da carteirinha',
  })
  @IsOptional()
  @IsDateString()
  dt_val_carteirinha?: string;
}