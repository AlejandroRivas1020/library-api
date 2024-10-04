import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './common/config/db.config';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), BookModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
