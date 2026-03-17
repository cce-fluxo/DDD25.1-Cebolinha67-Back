import {
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateImagemDto } from './create-imagem.dto';

export class UpdatePostagemDto {
  @IsOptional()
  @IsString()
  @MaxLength(150)
  titulo: string;

  @IsOptional()
  @IsString()
  mensagem: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImagemDto)
  imagens?: CreateImagemDto[];
}
