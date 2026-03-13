import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorizacaoDto } from './create-autorizacao.dto';

export class UpdateAutorizacaoDto extends PartialType(CreateAutorizacaoDto) {}
