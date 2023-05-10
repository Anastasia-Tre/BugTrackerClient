import axios from "axios";
import { User } from "../types/User";
import { GET_ALL_USERS, CREATE_USER, GET_USER } from "./CONSTANTS";

export class UserService {
  private axiosInstance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  private convertToUserModel(item: any): User {
    return new User(item);
  }

  private convertToUserModels(data: any[]): User[] {
    return data.map(this.convertToUserModel);
  }

  public async getUserById(id: number): Promise<User> {
    try {
      const { data } = await this.axiosInstance.get<User>(`${GET_USER()}${id}`);
      return this.convertToUserModel(data);
    } catch (error) {
      console.log("Failed to get user:", error);
      throw new Error("Failed to get user");
    }
  }

  public async getAllUsers(): Promise<User[]> {
    try {
      const { data } = await this.axiosInstance.get<User[]>(GET_ALL_USERS());
      return this.convertToUserModels(data);
    } catch (error) {
      console.log("Failed to get users:", error);
      throw new Error("Failed to get users");
    }
  }

  public async createUser(user: User) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.post<User>(
          CREATE_USER(),
          JSON.stringify(user)
        );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  public async updateUser(user: User) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.post<User>(
          `${GET_USER()}${user.id}`,
          JSON.stringify(user)
        );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  public async deleteUser(user: User) {
    try {
      const { data, status: responseStatus } =
        await this.axiosInstance.delete<User>(`${GET_USER()}${user.id}`, {
          data: JSON.stringify(user),
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
