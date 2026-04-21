import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateUsuarioDto } from "src/usuario/dto/create-usuario.dto";

export class CreateDentistaDto {

    @IsNotEmpty()
    @ApiProperty({
        description: 'esse campo é para formacao',
        example: 'Odontologia',
    })
    @IsString()
    formacao!:string;

    @IsNotEmpty()
    @ApiProperty({
        description: 'esse campo é para instituto',
        example: 'UFRJ',
    })
    @IsString()
    instituto!: string;

    @IsNotEmpty()
    @ApiProperty({
        description: 'esse campo é para data de início',
        example: '2026-03-18T20:46:58.663Z',
    })
    @Type(() => Date)
    @IsDate()
    datainicio!: Date;

    @IsNotEmpty()
    @ApiProperty({
        description: 'esse campo é para data de término',
        example: '2028-03-18T20:46:58.663Z',
    })
    @Type(() => Date)
    @IsDate()
    datatermino!: Date;

    @IsNotEmpty()
    @ApiProperty({
        description: 'esse campo é para especializacao',
        example: 'Osteopatia',
    })
    @IsString()
    especializacao!: string;

    @IsNotEmpty()
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


