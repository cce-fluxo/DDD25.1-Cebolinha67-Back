import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 👈 ADICIONA

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
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { UsuarioService } from './usuario/usuario.service';
import { LocalStrategy } from './auth/stratigies/local.strategy';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/stratigies/jwt-strategy';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DentistaModule, ConsultasModule, EnderecoModule, PacienteModule, AutorizacaoModule, NotificacaoModule, ConvenioModule, UsuarioModule, ImagemModule, PostagemModule, DetalheDaConsultaModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, UsuarioService, LocalStrategy, JwtService, JwtStrategy ],
})
export class AppModule {}
