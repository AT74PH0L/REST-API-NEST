import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class createUser {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  fname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  lname: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(120)
  age: number;
}
