import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImagemDto {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  nome: string;
}
