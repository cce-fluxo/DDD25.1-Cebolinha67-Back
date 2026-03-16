

import { PartialType, OmitType } from '@nestjs/mapped-types';
import { RegisterPacienteDto } from './register.dto';

export class UpdatePacienteDto extends OmitType(PartialType(RegisterPacienteDto), ['senha']) {}