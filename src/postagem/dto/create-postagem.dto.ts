import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreatePostagemDto {
  @IsInt()
  id_postagem: number;

  @IsString()
  titulo: string;

  @IsString()
  mensagem: string;

  @IsString()
  tipo: string;

  @IsDateString()
  data: string;

  @IsInt()
  id_dentista: number;
}
