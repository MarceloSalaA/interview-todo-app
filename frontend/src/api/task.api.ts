import { DeleteTaskDTO, TaskDTO, UpdateTaskDTO } from "../types/task";

export class TaskAPI {
  public static async getAll() {
    const res = await fetch("http://localhost:3001/task/get_all_tasks", {
      method: "GET",
    });

    const data = res.json();

    return data;
  }

  public static async create(taskDTO: TaskDTO) {
    const res = await fetch("http://localhost:3001/task/create_task", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskDTO),
    });

    const data = res.json();
    console.log(data);
    return data;
  }

  public static async delete(taskDTO: DeleteTaskDTO) {
    const res = await fetch("http://localhost:3001/task/delete_task", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskDTO),
    });

    const data = res.json();
    console.log(data);
    return data;
  }

  public static async edit(taskDTO: UpdateTaskDTO) {
    const res = await fetch("http://localhost:3001/task/update_task", {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskDTO),
    });

    const data = res.json();
    console.log(data);
    return data;
  }
}
