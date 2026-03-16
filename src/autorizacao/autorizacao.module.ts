import { Module } from '@nestjs/common';
import { AutorizacaoService } from './autorizacao.service';
import { AutorizacaoController } from './autorizacao.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [AutorizacaoController],
  providers: [AutorizacaoService],
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
})
export class AuthModule {}
export class AutorizacaoModule {}

// acho que tem que fazer esse passo extra pra gerar o token, pode tar errado ta kkk