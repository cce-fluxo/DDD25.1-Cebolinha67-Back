import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import * as crypto from 'crypto';

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

  private transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Servidor SMTP do provedor de e-mail (no caso, o Gmail).
    port: 587, // Porta utilizada para envio de e-mails (587 para TLS, 465 para SSL, 25 sem segurança).
    secure: false, // Define se a conexão será segura (false para TLS na porta 587).
    auth: { 
      user: process.env.TRANSPORTER_EMAIL, // Endereço de e-mail usado para enviar os e-mails (vem das variáveis de ambiente).
      pass: process.env.TRANSPORTER_SENHA, // Senha ou App Password do e-mail remetente.
    },
  });
  async esqueceuSenha(email_usuario: string) {
    const user = await this.userService.getUsuarioByEmail(email_usuario);
    if (!user) return { message: 'Se o email existir, você receberá um link de redefinição.' };

    const token = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 1000 * 60 * 60); // 1 hora

    await this.prisma.usuario.update({
      where: { email_usuario },
      data: {
        token_esqueci_senha: token,
        reset_token_expiry: expiry,
      },
    });

    const link = `http://localhost:3100/auth/redefinir-senha?token=${token}`;

    await this.transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email_usuario,
      subject: 'Redefinição de senha - SorriSync',
      html: `
        <p>Você solicitou a redefinição de senha.</p>
        <p>O link expira em 1 hora.</p>
        <a href="${link}">${link}</a>
        <p>Se não foi você, ignore este email.</p>
      `,
    });

    return { message: 'Se o email existir, você receberá um link de redefinição.' };
  }

  async redefinirSenha(token: string, novaSenha: string) {
    const user = await this.prisma.usuario.findFirst({
      where: {
        token_esqueci_senha: token,
        reset_token_expiry: { gt: new Date() },
      },
    });

    if (!user) throw new BadRequestException('Token inválido ou expirado');

    const hash = await bcrypt.hash(novaSenha, 10);

    await this.prisma.usuario.update({
      where: { id: user.id },
      data: {
        senha_usuario: hash,
        token_esqueci_senha: null,
        reset_token_expiry: null,
      },
    });

    return { message: 'Senha redefinida com sucesso.' };
  }
}
