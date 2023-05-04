export class Task {
  public id: number | undefined;
  public name: string = "";
  public description: string = "";
  public project: string = "";
  public deadline: Date = new Date();
  public status: string = "NEW"; // "NEW" | "PROGRESS" | "TESTING" | "CLOSED"
  public type: string = "TASK"; // "BUG" | "TASK" | "ISUEE" | "FEATURE"
  public assignee: string = "";
  public author: string = "";
  public priority: string = "MEDIUM"; // "MINOR" | "LOW" | "MEDIUM" | "HIGH"
  public difficulty: number = 0;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.project) this.project = initializer.project;
    if (initializer.deadline) this.deadline = new Date(initializer.deadline);

    const statuses = ["NEW", "PROGRESS", "TESTING", "CLOSED"];
    if (initializer.status) this.status = statuses[initializer.status - 1];

    const types = ["BUG", "TASK", "ISSUE", "FEATURE"];
    if (initializer.type) this.type = types[initializer.type - 1];

    if (initializer.assignee) this.assignee = initializer.assignee;
    if (initializer.author) this.author = initializer.author;

    const priorities = ["MINOR", "LOW", "MEDIUM", "HIGH"];
    if (initializer.priority)
      this.priority = priorities[initializer.priority - 1];

    if (initializer.difficulty) this.difficulty = initializer.difficulty;
  }
}

export const testData: Task[] = [
  {
    id: 1,
    name: "Fix login page",
    description:
      "The login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devicesThe login page is not displaying correctly on mobile devices",
    project: "Project A",
    deadline: new Date("2023-05-15"),
    status: "NEW",
    type: "TASK",
    assignee: "John Doe",
    author: "Jane Smith",
    priority: "MEDIUM",
    difficulty: 3,
  },
  {
    id: 2,
    name: "Create user profile page",
    description: "Create a user profile page with editable fields",
    project: "Project B",
    deadline: new Date("2023-06-01"),
    status: "PROGRESS",
    type: "FEATURE",
    assignee: "Jane Smith",
    author: "John Doe",
    priority: "HIGH",
    difficulty: 5,
  },
  {
    id: 3,
    name: "Fix broken link on home page",
    description: "The link to the about page is broken",
    project: "Project A",
    deadline: new Date("2023-05-20"),
    status: "TESTING",
    type: "BUG",
    assignee: "John Doe",
    author: "Jane Smith",
    priority: "LOW",
    difficulty: 2,
  },
  {
    id: 4,
    name: "Implement forgot password functionality",
    description: "Allow users to reset their password if they forget it",
    project: "Project C",
    deadline: new Date("2023-06-15"),
    status: "NEW",
    type: "FEATURE",
    assignee: "John Doe",
    author: "Jane Smith",
    priority: "MEDIUM",
    difficulty: 4,
  },
  {
    id: 5,
    name: "Improve search functionality",
    description: "Allow users to search for content across multiple pages",
    project: "Project B",
    deadline: new Date("2023-06-10"),
    status: "PROGRESS",
    type: "FEATURE",
    assignee: "Jane Smith",
    author: "John Doe",
    priority: "HIGH",
    difficulty: 5,
  },
];
