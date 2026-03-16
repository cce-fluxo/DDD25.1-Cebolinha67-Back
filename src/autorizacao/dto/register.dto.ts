// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import {IsDateString, IsEmail, IsInt, IsString } from 'class-validator';

export class RegistrarPacienteDto{
    
    // coisas de usuário
    @IsString()
    nome!:string

    @IsEmail()
    email!:string

    @IsInt()
    cpf!:number

    @IsInt()
    celular!:number

    @IsString()
    genero?:string

    @IsDateString()
    data_nascimento?: Date

    // coisas de paciente

    @IsString()
    senha!:string

    @IsInt()
    rg!:string
}


export class RegistrarDentistaDto{
    // coisas de usuário
    @IsString()
    nome!:string

    @IsEmail()
    email!:string

    @IsInt()
    cpf!:number

    @IsInt()
    celular!:number

    // coisas de dentista

    @IsString()
    senha!:string

    @IsString()
    formacao!:string

    @IsString()
    instituto!:string

    @IsString()
    especializacao?: string

    @IsDateString()
    data_inicio?:Date

    @IsDateString()
    data_termino?: Date
}