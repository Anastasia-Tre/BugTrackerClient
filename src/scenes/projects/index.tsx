import { Box } from "@mui/material";
import Header from "../../components/Header";
import { Project } from "../../types/Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

const Projects = () => {
  const projectData = [
    { name: "Project 1", tasksDone: 25, tasksTotal: 50, time: "12d" },
    { name: "Project 2", tasksDone: 30, tasksTotal: 50, time: "20d" },
    { name: "Project 3", tasksDone: 10, tasksTotal: 70, time: "30d" },
    { name: "Project 4", tasksDone: 30, tasksTotal: 70, time: "3d" },
    { name: "Project 5", tasksDone: 20, tasksTotal: 50, time: "10d" },
    { name: "Project 6", tasksDone: 0, tasksTotal: 10, time: "6d" },
    { name: "Project 7", tasksDone: 40, tasksTotal: 50, time: "30d" },
  ];

  var project1 = new Project();
  project1.name = "Project";
  project1.description = "Descriptin";
  project1.status = "OPEN";

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROJECTS" subtitle="Welcome to your projects" />
      </Box>
      <ProjectForm project={project1} />
      {/* PROJECTS LIST */}
      <Box display="flex" flexWrap="wrap" width="100%" gap={1}>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project1} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
