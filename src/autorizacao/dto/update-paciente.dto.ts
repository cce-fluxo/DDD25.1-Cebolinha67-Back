

import { PartialType, OmitType } from '@nestjs/mapped-types';
import { RegisterDentistaDto } from './register.dto';

export class UpdateDentistaDto extends OmitType(PartialType(RegisterDentistaDto), ['senha']) {}