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
}
