import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @UseGuards(JwtAuthGuard) //ver se o cara já fez o login com JWT
  @Get()
  getHello( @Request() req ) {
    console.log(req.user)
    return this.appService.getHello();
  }
}
