import { Types } from 'mongoose';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export interface Task {
  _id: Types.ObjectId;
  title: string;
  description: string;
  status: TaskStatus;
}

export type CleanTask = Omit<Task, '_id'> & {
  _id: string;
};
