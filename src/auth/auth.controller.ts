import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
      return await this.authService.ValidateUser(loginUserDto);
    }

    @Post('register')
    async create(@Body() registerUserDto: RegisterUserDto) {
      return await this.authService.create(registerUserDto);
   }
}
