import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LocalStrategy } from './stratigies/local.strategy';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './stratigies/jwt-strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsuarioService, LocalStrategy, JwtService, JwtStrategy],
})
export class AuthModule {}
