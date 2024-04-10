import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { hash,compare } from 'bcrypt';


@Injectable()
export class AuthService { 
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    async ValidateUser(loginUserDto: LoginUserDto) {
        const user = await this.userRepository.findOne({ where: { email: loginUserDto.email }});
        if (user) {
            return (await compare(loginUserDto.password, user.password)) 
        }
        throw new NotFoundException('Usuario no encontrado');
    }
    async create({name,email,password }: RegisterUserDto): Promise<User> {
        const user = await this.userRepository.findOne({ where: { email }});
        if (!user) {
          const hashedPassword = await hash(password, 10);
          const newUser = this.userRepository.create({name,email, password:hashedPassword});
          return await this.userRepository.save(newUser);
        }
        else{
            throw new ConflictException('El correo electrónico ya está en uso');
        }
    }
}