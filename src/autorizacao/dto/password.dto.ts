// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import { IsEmail, IsString } from "class-validator";

export class EsqueciMinhaSenhaDto{
    @IsEmail()
    email!:string
}

export class ResetSenhaDto{
    @IsString()
    token!:string

    @IsString()
    nova_senha!: string; // não sei se esse nome de variável ta padronizado
}

