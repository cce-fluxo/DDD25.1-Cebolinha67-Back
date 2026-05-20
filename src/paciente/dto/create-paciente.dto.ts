import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MinLength, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';

export class CreatePacienteDto {

  @ApiProperty({
    example: '123456789',
    description: 'RG do paciente',
  })
  @IsString()
  @IsNotEmpty()
  rg!: string;

  @IsNotEmpty()
  @ApiProperty({ 
    type: CreateUsuarioDto, 
  })
<<<<<<< HEAD
  @IsInt()
  @Type(() => Number)
  usuarioId: number;
  no_usuario: any;
=======
  @ValidateNested()
  @Type(() => CreateUsuarioDto)
  usuario!: CreateUsuarioDto;
>>>>>>> 105fa27a775154a1fe7cc7247da924234f02d708
}