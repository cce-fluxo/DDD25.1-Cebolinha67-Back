import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    //Todo guarda deve implementar uma função canActivate cuja resposta é true ou false
    return super.canActivate(context);
  }
}
