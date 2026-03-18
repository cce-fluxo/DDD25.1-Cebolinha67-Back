import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsInt, IsString } from "class-validator";
//import { Genero } from "src/generated/prisma/enums";

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
    @IsInt()
    @Type(() => Number)
    id_usuario!: number;

    // @ApiProperty()
    // no_usuario!: string;


    // @ApiProperty()
    // email_usuario!: string;

    // @ApiProperty()
    // cpf!: string;
    // @ApiProperty()
    // nu_celular!: string;
    // @ApiProperty()
    // genero: Genero;
    // @ApiProperty()
    // dt_nascimento: Date;
    // @ApiProperty()
    // token_esqueci_senha: string;


}
