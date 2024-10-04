import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  @Min(1000)
  @Max(new Date().getFullYear())
  publicationDate: number;

  @IsString()
  @IsNotEmpty()
  genre: string;
}
