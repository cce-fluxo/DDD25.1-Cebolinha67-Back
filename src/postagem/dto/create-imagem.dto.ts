import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateImagemDto {
  @ApiProperty({
    example: 'https://meusite.com/imagens/clareamento.jpg',
    description: 'URL da imagem',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @ApiProperty({
    example: 'clareamento.jpg',
    description: 'Nome da imagem',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}