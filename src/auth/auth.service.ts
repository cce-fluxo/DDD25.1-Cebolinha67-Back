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
    const payload = { id: user.id, email: user.email_usuario};
    const jwtToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    });
    return {
      access_token: jwtToken,
    };
  }
  
  async validateUser(email:string , senha_usuario: string){
    let user;
    try{
      user = await this.userService.getUsuarioByEmail(email);
    }
     catch{
      return null;
    } return user;
  

    const senhaCorreta = await bcrypt.compare(senha_usuario, user.senha_usuario);
    if(!senhaCorreta){
      return null;
    }
    
  }
}
