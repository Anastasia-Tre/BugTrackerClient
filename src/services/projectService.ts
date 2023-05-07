import axios from "axios";
import { Project } from "../types/Project";
import { GET_ALL_PROJECTS, CREATE_PROJECT, GET_PROJECT } from "./CONSTANTS";

export class ProjectService {
  private axiosInstance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  private convertToProjectModel(item: any): Project {
    return new Project(item);
  }

  private convertToProjectModels(data: any[]): Project[] {
    return data.map(this.convertToProjectModel);
  }

  public async getProjectById(id: number): Promise<Project> {
    try {
      const { data } = await this.axiosInstance.get<Project>(
        `${GET_PROJECT()}${id}`
      );
      return this.convertToProjectModel(data);
    } catch (error) {
      console.log("Failed to get project:", error);
      throw new Error("Failed to get project");
    }
  }

  public async getAllProjects(): Promise<Project[]> {
    try {
      const { data } = await this.axiosInstance.get<Project[]>(
        GET_ALL_PROJECTS()
      );
      return this.convertToProjectModels(data);
    } catch (error) {
      console.log("Failed to get projects:", error);
      throw new Error("Failed to get projects");
    }
  }

  public async filterProjects(
    name?: string,
    status?: string
  ): Promise<Project[]> {
    const projects = await this.getAllProjects();
    let filteredProjects = [...projects];

    if (name) {
      filteredProjects = filteredProjects.filter((project) =>
        project.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (status) {
      filteredProjects = filteredProjects.filter(
        (project) => project.getStatus() === status
      );
    }

    return filteredProjects;
  }

  public async createProject(project: Project) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.post<Project>(
          CREATE_PROJECT(),
          JSON.stringify(project)
        );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  public async updateProject(project: Project) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.post<Project>(
          `${GET_PROJECT()}${project.id}`,
          JSON.stringify(project)
        );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  public async deleteProject(project: Project) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.delete<Project>(
          `${GET_PROJECT()}${project.id}`,
          { data: JSON.stringify(project) }
        );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }
}
