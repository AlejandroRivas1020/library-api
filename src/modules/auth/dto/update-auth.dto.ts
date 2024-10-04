import { PartialType } from '@nestjs/mapped-types';
import { LoginUserDto } from './login-auth.dto';

export class UpdateAuthDto extends PartialType(LoginUserDto) {}
