import axios from "axios";
import { Project } from "../types/Project";
import { GET_ALL_PROJECTS } from "./CONSTANTS";

export class ProjectService {
  convertToProjectModels(data: any[]): Project[] {
    let projects: Project[] = data.map(this.convertToProjectModel);
    return projects;
  }

  convertToProjectModel(item: any): Project {
    return new Project(item);
  }

  async getAllProjects(): Promise<Project[]> {
    try {
      const { data, status } = await axios.get<Project[]>(GET_ALL_PROJECTS(), {
        headers: {
          Accept: "application/json",
        },
      });

      return this.convertToProjectModels(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return [];
      } else {
        console.log("unexpected error: ", error);
        return [];
      }
    }
  }

  async filterProjects(name?: string, status?: string): Promise<Project[]> {
    try {
      const { data, status: responseStatus } = await axios.get<Project[]>(
        GET_ALL_PROJECTS(),
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      let filteredProjects = this.convertToProjectModels(data);

      if (name) {
        filteredProjects = filteredProjects.filter((project) =>
          project.name.toLowerCase().includes(name.toLowerCase())
        );
      }

      if (status) {
        filteredProjects = filteredProjects.filter(
          (project) => project.status === status
        );
      }

      console.log(
        `Filtered projects by name=${name} and status=${status}:`,
        filteredProjects
      );

      return filteredProjects;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        throw new Error("Failed to get projects");
      } else {
        console.log("unexpected error: ", error);
        throw error;
      }
    }
  }
}
