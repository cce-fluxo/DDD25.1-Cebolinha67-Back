import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DentistaModule } from './dentista/dentista.module';
import { ConsultasModule } from './consulta/consultas.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PacienteModule } from './paciente/paciente.module';
import { AutorizacaoModule } from './autorizacao/autorizacao.module';
import { NotificacaoModule } from './notificacao/notificacao.module';
import { ConvenioModule } from './convenio/convenio.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ImagemModule } from './imagem/imagem.module';
import { PostagemModule } from './postagem/postagem.module';
import { DetalheDaConsultaModule } from './detalhe_da_consulta/detalhe_da_consulta.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DentistaModule, ConsultasModule, EnderecoModule, PacienteModule, AutorizacaoModule, NotificacaoModule, ConvenioModule, UsuarioModule, ImagemModule, PostagemModule, DetalheDaConsultaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
