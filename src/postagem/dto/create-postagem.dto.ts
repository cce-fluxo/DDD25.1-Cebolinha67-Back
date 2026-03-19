import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateImagemDto } from 'src/imagem/dto/create-imagem.dto';


export class CreatePostagemDto {
  @ApiProperty({
    example: 'Nova campanha de clareamento dental',
    maxLength: 150,
    description: 'Título da postagem',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  titulo: string;

  @ApiProperty({
    example: 'Confira os benefícios do novo procedimento disponível na clínica.',
    description: 'Conteúdo principal da postagem',
  })
  @IsString()
  @IsNotEmpty()
  mensagem: string;

  @ApiProperty({
    example: 3,
    description: 'ID do dentista responsável pela postagem',
  })
  @IsInt()
  @Type(() => Number)
  dentista: number;

  @ApiPropertyOptional({
    type: [CreateImagemDto],
    description: 'Lista de imagens associadas à postagem',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImagemDto)
  imagens?: CreateImagemDto[];

  @ApiPropertyOptional({
    example: [1, 2, 5],
    type: [Number],
    description: 'Lista de IDs dos pacientes relacionados à postagem',
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Type(() => Number)
  pacientes?: number[];
}