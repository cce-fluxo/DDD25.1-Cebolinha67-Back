import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsInt, IsString, ValidateNested } from "class-validator";
import { CreateUsuarioDto } from "src/usuario/dto/create-usuario.dto";
//import { Genero } from "src/generated/prisma/enums";

export class CreateDentistaDto {

    @ApiProperty({
        description: 'esse campo é para senha_dentista',
        example: 'fhjkfgh',
    })
    @IsString()
    senha_dentista!: string;

    @ApiProperty({
        description: 'esse campo é para formacao',
        example: 'Odontologia',
    })
    @IsString()
    formacao!:string;

    @ApiProperty({
        description: 'esse campo é para instituto',
        example: 'UFRJ',
    })
    @IsString()
    instituto!: string;

    @ApiProperty({
        description: 'esse campo é para data de início',
        example: '2026-03-18T20:46:58.663Z',
    })
    @Type(() => Date)
    @IsDate()
    datainicio!: Date;

    @ApiProperty({
        description: 'esse campo é para data de término',
        example: '2028-03-18T20:46:58.663Z',
    })
    @Type(() => Date)
    @IsDate()
    datatermino!: Date;

    @ApiProperty({
        description: 'esse campo é para especializacao',
        example: 'Osteopatia',
    })
    @IsString()
    especializacao!: string;

    @ApiProperty({ 
        type: CreateUsuarioDto, 
    })
    @ValidateNested()
    @Type(() => CreateUsuarioDto)
    usuario!: CreateUsuarioDto;
}

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


