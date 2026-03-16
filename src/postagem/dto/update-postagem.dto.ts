import { PartialType } from '@nestjs/mapped-types';
import { CreatePostagemDto } from './create-postagem.dto';
import { IsString, MaxLength } from 'class-validator';

export class UpdatePostagemDto extends PartialType(CreatePostagemDto) {
  @IsString()
  @MaxLength(150)
  titulo: string;

  @IsString()
  mensagem: string;
}
