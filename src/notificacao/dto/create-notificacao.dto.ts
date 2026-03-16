// quem esteve aqui (coloca seu nome smp que entrar pf): motta , 

import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class CreateNotificacaoDto {
    @ApiProperty({
        description: "esse campo é o id do usuário",
        example: "id : 1"
    })
    @IsInt()
    id_notificacao!: number;
    
    @ApiProperty({
        description: "mensagem"
    })
    @IsString()
    ds_mensagem !: string;

    @ApiProperty({
        description: "status da notificação, se já foi lida ou não",
        example: "lido : false"
    })
    @IsBoolean()
    lido !: boolean;

    @ApiProperty({
        description: "titulo da notificação"
    })
    @IsString()
    titulo !: string;

    @ApiProperty({
        description: "símbolo da notificação"
    })
    @IsString()
    simbolo !: string;

}
