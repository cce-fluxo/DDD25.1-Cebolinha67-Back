// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

import {IsInt, IsString } from 'class-validator';

export class CreateImagemDto {

    @IsInt()
    id_imagem!: number;

    @IsString()
    url!: string;

    @IsString()
    nome!: string;

}
