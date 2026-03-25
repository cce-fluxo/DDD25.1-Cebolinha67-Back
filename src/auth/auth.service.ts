import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  login(user) {
    //Cria o JWT a partir do usuario na request
    const payload = { id: user.id, email: user.email };
    const jwtToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    });
    return {
      access_token: jwtToken,
    };
  }
  async validateUser(email_usuario: string, senha_usuario: string) {
    const user = await this.userService.getUsuarioByEmail(email_usuario);
    if (!user || !(await bcrypt.compare(senha_usuario, user.senha_usuario))) {
      return null;
    }
    return { ...user, senha_usuario: undefined }; //confere isso aq MOTTA vê se n é senha_usuario

    // calma paizao, vou ver ss
  }
}
