export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in progress",
  DONE = "done",
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export interface TaskDTO {
  title: string;
  description: string;
  status: TaskStatus;
}

export type DeleteTaskDTO = Partial<Omit<Task, "_id">> & { _id: string };

export type UpdateTaskDTO = Partial<Omit<Task, "_id">> & { _id: string };
