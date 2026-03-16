// quem esteve aqui (coloca seu nome smp que entrar pf): motta , 

import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateNotificacaoDto {

    @IsInt()
    id_notificacao!: number;
    
    @IsString()
    ds_mensagem !: string;

    @IsBoolean()
    lido !: boolean;

    @IsString()
    titulo !: string;

    @IsString()
    simbolo !: string;

}
