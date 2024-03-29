import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../components/Header";
import { Project } from "../../types/Project";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { ProjectService } from "../../services/projectService";
import { PROJECTS } from "../../navigation/CONSTANTS";
import { tokens } from "../../theme/theme";

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<string>();
  const service = new ProjectService();

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

  const filter = async (name?: string, status?: string) => {
    if (status == "ALL") status = undefined;
    try {
      const data = await service.filterProjects(name, status);
      setProjects(data);
    } catch (e) {
      console.log("Error in filter data for all projects" + e);
    }
  };

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
          onChange={(val) => setName(val.target.value)}
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
          onChange={(val) => setStatus(val.target.value)}
          select
          name="status"
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="OPEN">Open</MenuItem>
          <MenuItem value="CLOSED">Closed</MenuItem>
          <MenuItem value="CURRENT">Current</MenuItem>
          <MenuItem value="ALL">All</MenuItem>
        </TextField>

        <Button
          onClick={(e) => {
            console.log("filter");
            filter(name, status);
          }}
          variant="contained"
          sx={{
            gridColumn: "span 1",
            color: "black",
            backgroundColor: colors.blueAccent[5],
          }}
        >
          FILTER
        </Button>

        <Button
          component={Link}
          to={PROJECTS + "/new"}
          color="secondary"
          variant="contained"
          sx={{ gridColumn: "span 1" }}
          endIcon={<AddIcon />}
        >
          CREATE
        </Button>
      </Box>

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
