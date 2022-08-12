import { InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  CreateTaskDAO,
  DeleteTaskDAO,
  GetTasksDAO,
  UpdateTaskDAO,
} from '../types/daos';
import { CreateTaskDTO, DeleteTaskDTO, UpdateTaskDTO } from '../types/dtos';
import { TaskDocument } from '../model/task';

export class TaskService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  async getAll(): Promise<GetTasksDAO | undefined> {
    try {
      return await this.taskModel.find();
    } catch (error) {
      throw new InternalServerErrorException('Failed getting users');
    }
  }

  async create(
    createTaskDTO: CreateTaskDTO,
  ): Promise<CreateTaskDAO | undefined> {
    try {
      const createdTask: CreateTaskDAO = await this.taskModel.create({
        ...createTaskDTO,
        _id: new Types.ObjectId(),
      });

      return createdTask;
    } catch (error) {
      throw new InternalServerErrorException('Failed creating task');
    }
  }

  async delete(
    deleteTaskDTO: DeleteTaskDTO,
  ): Promise<DeleteTaskDAO | undefined> {
    try {
      const deletedTask: DeleteTaskDAO = await this.taskModel.findByIdAndDelete(
        deleteTaskDTO._id,
      );
      return deletedTask;
    } catch (error) {
      throw new InternalServerErrorException('Failed deleting task');
    }
  }

  async update(
    updateTaskDTO: UpdateTaskDTO,
  ): Promise<UpdateTaskDAO | undefined> {
    try {
      const updateTask: UpdateTaskDAO = await this.taskModel.findByIdAndUpdate(
        updateTaskDTO._id,
        updateTaskDTO,
      );
      const updatedTask: UpdateTaskDAO = await this.taskModel.findById(
        updateTaskDTO._id,
      );
      return updatedTask;
    } catch (error) {
      throw new InternalServerErrorException('Failed updating task');
    }
  }
}
