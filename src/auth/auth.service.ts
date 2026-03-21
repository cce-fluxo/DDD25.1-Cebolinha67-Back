import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsuarioService,
  ) {}

  login() {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.getUsuarioByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas');
    }
    let senha: string = '';
    if (!user.dentista) {
      senha = user.paciente?.senha_paciente || '';
    } else if (!user.paciente) {
      senha = user.dentista?.senha_dentista || '';
    }
    if (senha === password) {
      return { ...user, senha: undefined };
    }
    throw new Error('Credenciais inválidas');
  }
}
