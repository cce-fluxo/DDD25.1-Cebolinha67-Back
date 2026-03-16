// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import {IsEmail, IsString } from 'class-validator';


export class LoginRequestDto{
    @IsEmail()
    email!:string

    @IsString()
    senha!:string
}

export enum TipoDeUsuario{
    Paciente = "PACIENTE",
    Dentista = "DENTISTA"
}

export class LoginResponseDto{
    // como é uma response, nn preciso de validadores
    id!:number
    nome!:string
    email!:string
    token!:string
}

