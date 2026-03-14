import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalheDaConsultaDto } from './create-detalhe_da_consulta.dto';

export class UpdateDetalheDaConsultaDto extends PartialType(CreateDetalheDaConsultaDto) {}
