import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";
import { Genero } from "src/generated/prisma/enums";

export class CreateDentistaDto {

    @ApiProperty()
    @IsString()
    senha_dentista!: string;

    @ApiProperty()
    @IsString()
    formacao!:string;

    @ApiProperty()
    @IsString()
    instituto!: string;

    @ApiProperty()
    @IsDate()
    datainicio!: Date;

    @ApiProperty()
    @IsDate()
    datatermino!: Date;

    @ApiProperty()
    @IsString()
    especializacao!: string;

    @ApiProperty()
    no_usuario!: string;

    email_usuario!: string;

    cpf!: string;

    nu_celular!: string;

    genero: Genero;

    dt_nascimento: Date;

    token_esqueci_senha: string;


}
