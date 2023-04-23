export class Task {
    name!: string;
    description!: string;
    project!: string;
    deadline!: string;
    status!: 'NEW' | 'PROGRESS' | 'TESTING'| 'CLOSED';
    type!: 'BUG' | 'TASK' | 'ISUEE'| 'FEATURE';
    assignee!: string;
    author!: string;
    priority!: 'MINOR' | 'LOW' | 'MEDIUM'| 'HIGH';
    difficults!: number; 
}

export const testData: Task[] = [
    {
      name: 'Fix login page',
      description: 'The login page is not displaying correctly on mobile devices',
      project: 'Project A',
      deadline: '2023-05-15',
      status: 'NEW',
      type: 'TASK',
      assignee: 'John Doe',
      author: 'Jane Smith',
      priority: 'MEDIUM',
      difficults: 3
    },
    {
      name: 'Create user profile page',
      description: 'Create a user profile page with editable fields',
      project: 'Project B',
      deadline: '2023-06-01',
      status: 'PROGRESS',
      type: 'FEATURE',
      assignee: 'Jane Smith',
      author: 'John Doe',
      priority: 'HIGH',
      difficults: 5
    },
    {
      name: 'Fix broken link on home page',
      description: 'The link to the about page is broken',
      project: 'Project A',
      deadline: '2023-05-20',
      status: 'TESTING',
      type: 'BUG',
      assignee: 'John Doe',
      author: 'Jane Smith',
      priority: 'LOW',
      difficults: 2
    },
    {
      name: 'Implement forgot password functionality',
      description: 'Allow users to reset their password if they forget it',
      project: 'Project C',
      deadline: '2023-06-15',
      status: 'NEW',
      type: 'FEATURE',
      assignee: 'John Doe',
      author: 'Jane Smith',
      priority: 'MEDIUM',
      difficults: 4
    },
    {
      name: 'Improve search functionality',
      description: 'Allow users to search for content across multiple pages',
      project: 'Project B',
      deadline: '2023-06-10',
      status: 'PROGRESS',
      type: 'FEATURE',
      assignee: 'Jane Smith',
      author: 'John Doe',
      priority: 'HIGH',
      difficults: 5
    }
  ];
  