import axios from "axios";
import { Task } from "../types/Task";
import { GET_ALL_TASKS, CREATE_TASK, GET_TASK } from "./CONSTANTS";

export class TaskService {
  private axiosInstance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  private convertToTaskModel(item: any): Task {
    return new Task(item);
  }

  private convertToTaskModels(data: any[]): Task[] {
    return data.map(this.convertToTaskModel);
  }

  public async getTaskById(id: number): Promise<Task> {
    try {
      const { data } = await this.axiosInstance.get<Task>(`${GET_TASK()}${id}`);
      return this.convertToTaskModel(data);
    } catch (error) {
      console.log("Failed to get Task:", error);
      throw new Error("Failed to get Task");
    }
  }

  public async getAllTasks(): Promise<Task[]> {
    try {
      const { data } = await this.axiosInstance.get<Task[]>(GET_ALL_TASKS());
      return this.convertToTaskModels(data);
    } catch (error) {
      console.log("Failed to get tasks:", error);
      throw new Error("Failed to get tasks");
    }
  }

  public async filterTasks(
    name?: string,
    status?: string,
    type?: string,
    priority?: string
  ): Promise<Task[]> {
    const tasks = await this.getAllTasks();
    let filteredTasks = [...tasks];

    if (name) {
      filteredTasks = filteredTasks.filter((task) =>
        task.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (status) {
      filteredTasks = filteredTasks.filter(
        (task) => task.getStatus() === status
      );
    }

    if (type) {
      filteredTasks = filteredTasks.filter((task) => task.getType() === type);
    }

    if (priority) {
      filteredTasks = filteredTasks.filter(
        (task) => task.getPriority() === priority
      );
    }

    return filteredTasks;
  }

  public async createTask(task: Task) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.post<Task>(
          CREATE_TASK(),
          JSON.stringify(task)
        );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  public async updateTask(task: Task) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.post<Task>(
          `${GET_TASK()}${task.id}`,
          JSON.stringify(task)
        );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  public async deleteTask(task: Task) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.delete<Task>(`${GET_TASK()}${task.id}`, {
          data: JSON.stringify(task),
        });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }
}
