import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/modules/book/entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: string): Promise<Book> {
    return this.bookRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
