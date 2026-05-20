import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        console.log('JWT_SECRET:', process.env.JWT_SECRET) 
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET as string, //tive que add isso para parar de acusar erro. Apenas garante que o token vai ser uma string
        })
    }

    validate(payload){
        return { id: payload.id, email: payload.email, dentista_id : payload.dentista_id,} // coloquei o dentista id no validate
    }

    
}