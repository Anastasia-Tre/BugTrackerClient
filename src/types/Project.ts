
export class Project {
    name!: string;
    description!: string;
    deadline!: string;
    status!: 'OPEN' | 'CLOSED' | 'CURRENT';
    bugs!: number[];
    team!: number[];

    getTotalTasks() {
        return 50;
    }

    getDoneTasks() {
        return 25;
    }


}