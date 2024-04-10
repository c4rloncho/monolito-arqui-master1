import { Module } from '@nestjs/common';
import { Auth } from 'typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]), // Importa la entidad User de TypeORM
        // Otros módulos de importación si los hubiera
      ],
    controllers: [AuthController],
    providers: [AuthService],

})
export class AuthModule {}
