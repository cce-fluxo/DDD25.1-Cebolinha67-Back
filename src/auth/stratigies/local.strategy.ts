import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email_usuario', passwordField: 'senha_usuario' });
  }

  validate(email: string, password: string) {
    //Adiciona o usuario encontrado na Request
    return this.authService.validateUser(email, password);
  }
}
