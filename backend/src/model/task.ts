import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongoose, Types } from 'mongoose';
import { Task, TaskStatus } from '../types/task';

@Schema()
export class TaskMongo implements Task {
  @Prop({
    type: SchemaMongoose.Types.ObjectId,
  })
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: () => TaskStatus, enum: TaskStatus, required: true })
  status: TaskStatus;
}

export type TaskDocument = TaskMongo & Document;

export const TaskSchema = SchemaFactory.createForClass(TaskMongo);
