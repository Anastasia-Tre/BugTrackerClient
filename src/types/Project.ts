export class Project {
  public id: number | undefined;
  public name: string = "";
  public description: string = "";
  public deadline: Date = new Date();
  public status: number = 1; //string = "OPEN"; //"OPEN" | "CURRENT" | "CLOSED";
  public authorId: number = 1;
  public authorName: string = "";
  public bugs: number[] | undefined;
  public team: number[] | undefined;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.deadline) this.deadline = new Date(initializer.deadline);
    if (initializer.authorId) this.authorId = initializer.authorId;
    if (initializer.author)
      this.authorName =
        initializer.author.firstName + " " + initializer.author.lastName;
    if (initializer.status) this.status = initializer.status;
  }

  getStatus(): string {
    const statuses = ["OPEN", "CURRENT", "CLOSED"];
    return statuses[this.status - 1];
  }
}
