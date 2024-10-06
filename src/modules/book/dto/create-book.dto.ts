import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'One Hundred Years of solitude' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Gabriel Garcia Marquez' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ example: 1967, description: 'Year of publication' })
  @IsInt()
  @Min(1000)
  @Max(new Date().getFullYear())
  publicationDate: number;

  @ApiProperty({ example: 'Magic Realism' })
  @IsString()
  @IsNotEmpty()
  genre: string;
}
