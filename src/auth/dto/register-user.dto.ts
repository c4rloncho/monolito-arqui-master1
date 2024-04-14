import { PartialType } from '@nestjs/mapped-types';
import { LoginUserDto } from './login-user.dto';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDto extends PartialType(LoginUserDto) {
    name: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
