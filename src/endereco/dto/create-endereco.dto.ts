import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEnderecoDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    logradouro: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()    
    cidade: string;

    @ApiProperty()
    @IsString()  
    @IsNotEmpty()      
    estado: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()    
    bairro: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()    
    complemento: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()    
    cep: string;

    @IsInt()
    @ApiProperty()
    @IsNotEmpty()    
    id_dentista: number
}
