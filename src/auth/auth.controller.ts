import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('esqueceu-senha')
  esqueceuSenha(@Body() body: { email_usuario: string }) {
    return this.authService.esqueceuSenha(body.email_usuario);
  }

  @Post('redefinir-senha')
  redefinirSenha(@Body() body: { token: string; nova_senha: string }) {
    return this.authService.redefinirSenha(body.token, body.nova_senha);
  }
  
}
