import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsuarioService],
})
export class AuthModule {}
