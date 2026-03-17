import {
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateImagemDto } from './create-imagem.dto';

export class UpdatePostagemDto {
  @ApiPropertyOptional({
    example: 'Novo título da postagem',
    maxLength: 150,
    description: 'Título atualizado da postagem',
  })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  titulo?: string;

  @ApiPropertyOptional({
    example: 'Texto atualizado da postagem',
    description: 'Mensagem atualizada da postagem',
  })
  @IsOptional()
  @IsString()
  mensagem?: string;

  @ApiPropertyOptional({
    type: [CreateImagemDto],
    description: 'Lista de imagens da postagem',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImagemDto)
  imagens?: CreateImagemDto[];
}