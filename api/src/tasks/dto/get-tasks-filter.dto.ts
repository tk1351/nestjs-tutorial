import { TaskStatus } from '../task.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
  // statusもsearchも必須ではないため@IsOptional()を使う
  // @IsInで配列内の値のいずれかと一致するか判定する
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  // serachのqueryが存在する場合は@IsNotEmpty()が発動する
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
