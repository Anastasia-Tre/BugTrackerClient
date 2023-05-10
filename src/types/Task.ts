import { Project } from "./Project";
import { User } from "./User";

export class Task {
  public id: number | undefined;
  public name: string = "";
  public description: string = "";
  public projectId: number = 1;
  public project: Project = new Project();
  public deadline: Date = new Date();
  public status: number = 1; //string = "NEW"; // "NEW" | "PROGRESS" | "TESTING" | "CLOSED"
  public type: number = 1; // string = "TASK"; // "ISUEE" | "FEATURE" | "TASK" | "BUG"
  public assignedId: number = 1;
  public assigned: User = new User();
  public authorId: number = 1; //string = "";
  public priority: number = 3; // string = "NORMAL"; // "MINOR" | "LOW" | "NORMAL" | "HIGH"
  public difficulty: number = 0;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.projectId) this.projectId = initializer.projectId;
    if (initializer.project) this.project = new Project(initializer.project);
    if (initializer.deadline) this.deadline = new Date(initializer.deadline);
    if (initializer.status) this.status = initializer.status;
    if (initializer.type) this.type = initializer.type;
    if (initializer.assignedId) this.assignedId = initializer.assignedId;
    if (initializer.assigned) this.assigned = new User(initializer.assigned);
    if (initializer.authorId) this.authorId = initializer.authorId;
    if (initializer.priority) this.priority = initializer.priority;
    if (initializer.difficulty) this.difficulty = initializer.difficulty;
  }

  getStatus(): string {
    const statuses = ["NEW", "PROGRESS", "TESTING", "CLOSED"];
    return statuses[this.status - 1];
  }

  getType(): string {
    const types = ["ISSUE", "FEATURE", "TASK", "BUG"];
    return types[this.type - 1];
  }

  getPriority(): string {
    const priorities = ["MINOR", "LOW", "NORMAL", "HIGH"];
    return priorities[this.priority - 1];
  }
}

// export const testData: Task[] = [
//   {
//     id: 1,
//     name: "Fix login page",
//     description:
//       "The login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devices",
//     project: "Project A",
//     deadline: new Date("2023-05-15"),
//     status: "NEW",
//     type: "TASK",
//     assignee: "John Doe",
//     author: "Jane Smith",
//     priority: "MEDIUM",
//     difficulty: 3,
//   },
//   {
//     id: 2,
//     name: "Create user profile page",
//     description: "Create a user profile page with editable fields",
//     project: "Project B",
//     deadline: new Date("2023-06-01"),
//     status: "PROGRESS",
//     type: "FEATURE",
//     assignee: "Jane Smith",
//     author: "John Doe",
//     priority: "HIGH",
//     difficulty: 5,
//   },
//   {
//     id: 3,
//     name: "Fix broken link on home page",
//     description: "The link to the about page is broken",
//     project: "Project A",
//     deadline: new Date("2023-05-20"),
//     status: "TESTING",
//     type: "BUG",
//     assignee: "John Doe",
//     author: "Jane Smith",
//     priority: "LOW",
//     difficulty: 2,
//   },
//   {
//     id: 4,
//     name: "Implement forgot password functionality",
//     description: "Allow users to reset their password if they forget it",
//     project: "Project C",
//     deadline: new Date("2023-06-15"),
//     status: "CLOSED",
//     type: "ISSUE",
//     assignee: "John Doe",
//     author: "Jane Smith",
//     priority: "MINOR",
//     difficulty: 4,
//   },
//   {
//     id: 5,
//     name: "Improve search functionality",
//     description: "Allow users to search for content across multiple pages",
//     project: "Project B",
//     deadline: new Date("2023-06-10"),
//     status: "PROGRESS",
//     type: "FEATURE",
//     assignee: "Jane Smith",
//     author: "John Doe",
//     priority: "HIGH",
//     difficulty: 5,
//   },
// ];
