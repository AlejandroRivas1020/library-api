import { UserService } from '../../modules/user/user.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { Role } from '../user/enum/role.enum';

export async function seedUsers() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);

  const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'adminpassword',
      role: Role.Admin,
    },
    {
      name: 'Client User',
      email: 'client@example.com',
      password: 'clientpassword',
      role: Role.User,
    },
  ];

  for (const user of users) {
    const existingUser = await userService.findByEmail(user.email);
    if (!existingUser) {
      await userService.create(user);
      console.log(`User ${user.email} created`);
    } else {
      console.log(`User ${user.email} already exists`);
    }
  }

  await app.close();
}
