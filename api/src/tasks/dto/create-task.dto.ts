import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  // createTask()の引数に入る値の型を定義する
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
