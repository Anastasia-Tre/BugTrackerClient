import axios from "axios";
import { Serie } from "@nivo/line";
import { Task } from "../types/Task";
import {
  GET_ALL_TASKS,
  CREATE_TASK,
  GET_TASK,
  GET_TASKS_FOR_PROJECT,
  GET_TASK_IN_FOCUS,
  GET_TASKS_FOR_NOW_OR_LATER,
  GET_TASK_TOTAL,
  GET_TASK_COMPLETE,
  GET_TASK_UNCOMPLETE,
  GET_TASK_OVERDUE,
  GET_TASKS_FOR_USER,
} from "./CONSTANTS";

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
      console.log("Failed getTaskById to get Task:", error);
      throw new Error("Failed getTaskById to get Task");
    }
  }

  public async getAllTasks(): Promise<Task[]> {
    try {
      const { data } = await this.axiosInstance.get<Task[]>(GET_ALL_TASKS());
      return this.convertToTaskModels(data);
    } catch (error) {
      console.log("Failed getAllTasks to get tasks:", error);
      throw new Error("Failed getAllTasks to get tasks");
    }
  }

  public async filterTasks(
    name?: string,
    status?: string,
    type?: string,
    priority?: string,
    project?: string
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

    if (project) {
      filteredTasks = filteredTasks.filter(
        (task) => task.project.name === project
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
        console.log("error message filterTasks: ", error.message);
      } else {
        console.log("unexpected error filterTasks: ", error);
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
        console.log("error message updateTask: ", error.message);
      } else {
        console.log("unexpected error updateTask: ", error);
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
        console.log("error message deleteTask: ", error.message);
      } else {
        console.log("unexpected error deleteTask: ", error);
      }
    }
  }

  public async getAllTasksForProject(projectId: number): Promise<Task[]> {
    try {
      const { data } = await this.axiosInstance.get<Task[]>(
        GET_TASKS_FOR_PROJECT(),
        { params: { projectId } }
      );
      return this.convertToTaskModels(data);
    } catch (error) {
      console.log("Failed getAllTasksForProject to get tasks:", error);
      throw new Error("Failed getAllTasksForProject to get tasks");
    }
  }

  public async getAllTasksForUser(userId: number): Promise<Task[]> {
    try {
      const { data } = await this.axiosInstance.get<Task[]>(
        GET_TASKS_FOR_USER(),
        { params: { userId } }
      );
      return this.convertToTaskModels(data);
    } catch (error) {
      console.log("Failed getAllTasksForUser to get tasks:", error);
      throw new Error("Failed getAllTasksForUser to get tasks");
    }
  }

  public async getTaskInFocus(userId: number): Promise<Task> {
    try {
      const { data } = await this.axiosInstance.get<Task>(GET_TASK_IN_FOCUS(), {
        params: { userId },
      });
      return this.convertToTaskModel(data);
    } catch (error) {
      console.log("Failed getTaskInFocus to get tasks:", error);
      throw new Error("Failed getTaskInFocus to get tasks");
    }
  }

  public async getAllTasksForNowOrLater(userId: number): Promise<Task[]> {
    try {
      const { data } = await this.axiosInstance.get<Task[]>(
        GET_TASKS_FOR_NOW_OR_LATER(),
        { params: { userId } }
      );
      return this.convertToTaskModels(data);
    } catch (error) {
      console.log("Failed getAllTasksForNowOrLater to get tasks:", error);
      throw new Error("Failed getAllTasksForNowOrLater to get tasks");
    }
  }

  public async getTaskTotal(userId: number): Promise<number> {
    try {
      const { data } = await this.axiosInstance.get<number>(GET_TASK_TOTAL(), {
        params: { userId },
      });
      return data;
    } catch (error) {
      console.log("Failed getTaskTotal to get tasks:", error);
      throw new Error("Failed getTaskTotal to get tasks");
    }
  }

  public async getTaskComplete(userId: number): Promise<number> {
    try {
      const { data } = await this.axiosInstance.get<number>(
        GET_TASK_COMPLETE(),
        {
          params: { userId },
        }
      );
      return data;
    } catch (error) {
      console.log("Failed getTaskComplete to get tasks:", error);
      throw new Error("Failed getTaskComplete to get tasks");
    }
  }

  public async getTaskUncomplete(userId: number): Promise<number> {
    try {
      const { data } = await this.axiosInstance.get<number>(
        GET_TASK_UNCOMPLETE(),
        {
          params: { userId },
        }
      );
      return data;
    } catch (error) {
      console.log("Failed getTaskUncomplete to get tasks:", error);
      throw new Error("Failed getTaskUncomplete to get tasks");
    }
  }

  public async getTaskOverdue(userId: number): Promise<number> {
    try {
      const { data } = await this.axiosInstance.get<number>(
        GET_TASK_OVERDUE(),
        {
          params: { userId },
        }
      );
      return data;
    } catch (error) {
      console.log("Failed getTaskOverdue to get tasks:", error);
      throw new Error("Failed getTaskOverdue to get tasks");
    }
  }

  public prepareDataForLineDigram(tasks: Task[]): Serie[] {
    const countsByMonth = tasks.reduce((counts, task) => {
      const month = task.deadline.getMonth() + 1;
      const year = task.deadline.getFullYear();
      const key = `${year}-${month}-01`;

      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);

    const data: { x: string; y: number }[] = Object.entries(countsByMonth).map(
      ([key, count]) => ({
        x: key,
        y: count,
      })
    );

    data.sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime());

    const result: Serie = {
      id: "tasks",
      data,
    };

    return [result];
  }

  public prepareDataForBarDiagram(
    tasks: Task[]
  ): { project: string; complete: number; uncomplete: number }[] {
    const countsByProject: Record<
      string,
      { complete: number; uncomplete: number }
    > = {};

    tasks.forEach((task) => {
      const key = task.project.name;
      const isComplete = task.status > 2;

      if (!countsByProject[key]) {
        countsByProject[key] = { complete: 0, uncomplete: 0 };
      }

      if (isComplete) {
        countsByProject[key].complete += 1;
      } else {
        countsByProject[key].uncomplete += 1;
      }
    });

    const data: { project: string; complete: number; uncomplete: number }[] =
      Object.entries(countsByProject).map(([key, count]) => ({
        project: key,
        complete: count.complete,
        uncomplete: count.uncomplete,
      }));

    return data;
  }
}
