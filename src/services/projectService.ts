import axios from "axios";
import { Project } from "../types/Project";
import { GET_ALL_PROJECTS, CREATE_PROJECT, GET_PROJECT } from "./CONSTANTS";

export class ProjectService {
  convertToProjectModels(data: any[]): Project[] {
    let projects: Project[] = data.map(this.convertToProjectModel);
    return projects;
  }

  convertToProjectModel(item: any): Project {
    return new Project(item);
  }

  async getProjectById(id: number): Promise<Project> {
    try {
      const { data } = await axios.get<Project>(GET_PROJECT() + "id", {
        headers: {
          Accept: "application/json",
        },
      });

      const project = this.convertToProjectModel(data);
      return project;
    } catch (error) {
      console.log("Failed to get project:", error);
      throw new Error("Failed to get project");
    }
  }

  async getAllProjects(): Promise<Project[]> {
    try {
      const { data } = await axios.get<Project[]>(GET_ALL_PROJECTS(), {
        headers: {
          Accept: "application/json",
        },
      });

      const projects = data.map((item) => new Project(item));
      //console.log("All projects:", projects);
      return projects;
    } catch (error) {
      console.log("Failed to get projects:", error);
      throw new Error("Failed to get projects");
    }
  }

  async filterProjects(name?: string, status?: string): Promise<Project[]> {
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

    // console.log(
    //   `Filtered projects by name=${name} and status=${status}:`,
    //   filteredProjects
    // );

    return filteredProjects;
  }

  async createProject(project: Project) {
    try {
      const { data, status: responseStatus } = await axios.post<Project>(
        CREATE_PROJECT(),
        JSON.stringify(project),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  async updateProject(project: Project) {
    try {
      const { data, status: responseStatus } = await axios.post<Project>(
        GET_PROJECT() + project.id,
        JSON.stringify(project),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  async deleteProject(project: Project) {
    try {
      const { data, status: responseStatus } = await axios.delete<Project>(
        GET_PROJECT() + project.id,
        {
          data: JSON.stringify(project),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
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
