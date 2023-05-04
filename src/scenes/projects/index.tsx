import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../components/Header";
import { Project } from "../../types/Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useEffect, useState } from "react";
import { ProjectService } from "../../services/projectService";

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

  const [projects, setProjects] = useState<Project[]>([]);
  const service = new ProjectService();
  console.log("In project");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await service.getAllProjects();
        setProjects(data);
      } catch (e) {
        console.log("Error in load data for all projects" + e);
      }
    }
    loadData();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROJECTS" subtitle="Welcome to your projects" />
      </Box>
      {/* FILTER BAR */}
      <Box
        width="100%"
        display="grid"
        gap="10px"
        gridTemplateColumns="repeat(9, minmax(0, 1fr))"
        paddingBottom="10px"
      >
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Search"
          name="search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ gridColumn: "span 2" }}
        ></TextField>
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Status"
          select
          name="status"
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="OPEN">Open</MenuItem>
          <MenuItem value="CLOSED">Closed</MenuItem>
          <MenuItem value="CURRENT">Current</MenuItem>
        </TextField>

        <Button
          onClick={(e) => console.log("filter")}
          color="primary"
          variant="contained"
          sx={{ gridColumn: "span 1" }}
        >
          FILTER
        </Button>
        <Button
          onClick={(e) => console.log("create")}
          color="secondary"
          variant="contained"
          sx={{ gridColumn: "span 1" }}
          endIcon={<AddIcon />}
        >
          CREATE
        </Button>
      </Box>

      {/* <ProjectForm project={project1} /> */}
      {/* PROJECTS LIST */}
      <Box display="flex" flexWrap="wrap" width="100%" gap={1}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
