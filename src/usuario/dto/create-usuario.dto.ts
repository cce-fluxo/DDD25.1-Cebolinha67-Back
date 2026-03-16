// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsInt()
    id_usuario!: number;

    @IsString()
    no_usuario!: string;

    @IsString()
    email_usuario!: string;

    @IsString()
    cpf!: string;

    @IsInt()
    nu_celular!: string;

    @IsInt() // acho que é int pq é um tipo enumerado (lembrar de perguntar isso)
    genero!: string;

    @IsDateString()
    dt_nascimento!: Date;

    @IsString()
    token_esqueci_senha!: string;

}

