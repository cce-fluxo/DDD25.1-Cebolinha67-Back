// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import { PartialType, OmitType } from '@nestjs/mapped-types';
import { RegistrarDentistaDto } from './register.dto';

export class UpdateDentistaDto extends OmitType(PartialType(RegistrarDentistaDto), ['senha']) {}

