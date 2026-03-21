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

  @ApiProperty({ 
    type: CreateUsuarioDto, 
  })
  @ValidateNested()
  @Type(() => CreateUsuarioDto)
  usuario!: CreateUsuarioDto;
}