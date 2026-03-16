// quem esteve aqui (coloca seu nome smp que entrar pf): motta 
import { ApiProperty } from '@nestjs/swagger';
import {IsInt, IsString } from 'class-validator';

export class CreateImagemDto {
    @ApiProperty({
        description: "esse campo é o id da imagem",
        example: "id : 1"
    })
    @IsInt()
    id_imagem!: number;

    @ApiProperty({
        description: "esse campo é a URL da imagem",
        example: "url : https://example.com/imagem.jpg"
    })  
    @IsString()
    url!: string;

    @ApiProperty({
        description: "esse campo é o nome da imagem",
        example: "nome : imagem.jpg"
    })
    @IsString()
    nome!: string;

}
