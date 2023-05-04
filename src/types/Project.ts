export class Project {
  id!: number;
  name!: string;
  description!: string;
  deadline!: string;
  status!: string; //"OPEN" | "CLOSED" | "CURRENT";
  bugs!: number[];
  team!: number[];

  getTotalTasks() {
    return 50;
  }

  getDoneTasks() {
    return 25;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.deadline) this.deadline = initializer.deadline;

    const statuses = ["OPEN", "CLOSED", "CURRENT"];
    if (initializer.status) this.status = statuses[initializer.status - 1];
  }
}
