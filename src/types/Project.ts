export interface IProject {
    name: string, 
    description: string,
    deadline: string,
    status: string,
    bugs: number[],
    team: number[]
}

export class Project implements IProject {
    name!: string;
    description!: string;
    deadline!: string;
    status!: string;
    bugs!: number[];
    team!: number[];

    getTotalTasks() {
        return 50;
    }

    getDoneTasks() {
        return 25;
    }

    
}