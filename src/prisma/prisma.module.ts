import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Global() // ← disponível em toda a aplicação sem precisar importar TEM QUE TER ISSO AQUI, SE NÃO VAI DAR ERRO DE "PRISMA SERVICE NÃO ENCONTRADO" EM QUALQUER LUGAR QUE EU TENTAR USAR VTNC  
// FOI PORRA MEEEEEEEEEEEEEENNNNNNNNGOOOOOOOO 
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}