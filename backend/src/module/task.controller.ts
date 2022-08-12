import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  CreateTaskDAO,
  DeleteTaskDAO,
  GetTasksDAO,
  UpdateTaskDAO,
} from '../types/daos';
import { CreateTaskDTO, DeleteTaskDTO, UpdateTaskDTO } from '../types/dtos';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('get_all_tasks')
  async getAll(): Promise<GetTasksDAO | undefined> {
    return await this.taskService.getAll();
  }

  @Post('create_task')
  async create(
    @Body() createTaskDTO: CreateTaskDTO,
  ): Promise<CreateTaskDAO | undefined> {
    return await this.taskService.create(createTaskDTO);
  }

  @Delete('delete_task')
  async delete(
    @Body() deleteTaskDTO: DeleteTaskDTO,
  ): Promise<DeleteTaskDAO | undefined> {
    return await this.taskService.delete(deleteTaskDTO);
  }

  @Patch('update_task')
  async update(
    @Body() updateTaskDTO: UpdateTaskDTO,
  ): Promise<UpdateTaskDAO | undefined> {
    return await this.taskService.update(updateTaskDTO);
  }
}
