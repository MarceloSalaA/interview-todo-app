import { CleanTask, Task } from './task';

export interface TaskDTO {
  filter: Partial<CleanTask>;
  supress: (keyof Task)[];
}

export interface GetTasksDTO {
  limit?: number;
  offset?: number;
}

export type CreateTaskDTO = Omit<Task, '_id'>;

export type DeleteTaskDTO = Partial<Omit<Task, '_id'>> & { _id: string };

export type UpdateTaskDTO = Partial<Omit<Task, '_id'>> & { _id: string };
