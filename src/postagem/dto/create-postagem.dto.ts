import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { TipoPostagem } from 'src/generated/prisma/browser';

export class CreatePostagemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  mensagem: string;

  @IsEnum(TipoPostagem as object)
  tipo: TipoPostagem;

  @Type(() => Number)
  @IsInt()
  dentista: number;
}
