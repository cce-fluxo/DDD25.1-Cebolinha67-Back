// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import { PartialType, OmitType } from '@nestjs/mapped-types';
import { RegistrarPacienteDto } from './register.dto';

export class UpdatePacienteDto extends OmitType(PartialType(RegistrarPacienteDto), ['senha']) {}