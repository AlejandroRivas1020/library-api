import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './common/config/db.config';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
