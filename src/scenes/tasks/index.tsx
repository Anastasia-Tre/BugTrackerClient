import {
  Box,
  useTheme,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../components/Header";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import { TaskService } from "../../services/taskService";
import { Task } from "../../types/Task";
import { TASKS } from "../../navigation/CONSTANTS";
import { Link } from "react-router-dom";
import { ProjectService } from "../../services/projectService";
import { Project } from "../../types/Project";
import { User } from "../../types/User";
import { UserService } from "../../services/userService";
import { tokens } from "../../theme/theme";

const Tasks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [type, setType] = useState<string>();
  const [priority, setPriority] = useState<string>();
  const [project, setProject] = useState<string>();
  const [assigned, setAssigned] = useState<string>();

  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const service = new TaskService();
  const projectService = new ProjectService();
  const userService = new UserService();

  useEffect(() => {
    async function loadData() {
      try {
        const data = await service.getAllTasks();
        setTasks(data);
        const projects = await projectService.getAllProjects();
        setProjects(projects);
        const users = await userService.getAllUsers();
        setUsers(users);
      } catch (e) {
        console.log("Error in load data for all tasks" + e);
      }
    }
    loadData();
  }, []);

  const filter = async (
    name?: string,
    status?: string,
    type?: string,
    priority?: string,
    project?: string,
    assigned?: string
  ) => {
    if (status == "ALL") status = undefined;
    if (type == "ALL") type = undefined;
    if (priority == "ALL") priority = undefined;
    if (project == "ALL") project = undefined;
    if (assigned == "ALL") assigned = undefined;
    try {
      const data = await service.filterTasks(
        name,
        status,
        type,
        priority,
        project,
        assigned
      );
      setTasks(data);
    } catch (e) {
      console.log("Error in filter data for all projects" + e);
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TASKS" subtitle="Welcome to your tasks" />
      </Box>
      {/* FILTER BAR */}
      <Box
        width="100%"
        display="grid"
        gap="10px"
        gridTemplateColumns="repeat(12, minmax(0, 1fr))"
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
          label="Project"
          select
          name="project"
          onChange={(val) => setProject(val.target.value)}
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="ALL">All</MenuItem>
          {projects.map((elem) => (
            <MenuItem key={elem.id} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Assigned"
          select
          name="assigned"
          onChange={(val) => setAssigned(val.target.value)}
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="ALL">All</MenuItem>
          {users.map((elem) => (
            <MenuItem key={elem.id} value={elem.getFullName()}>
              {elem.getFullName()}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Status"
          select
          name="status"
          onChange={(val) => setStatus(val.target.value)}
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="NEW">New</MenuItem>
          <MenuItem value="PROGRESS">In Progress</MenuItem>
          <MenuItem value="TESTING">Testing</MenuItem>
          <MenuItem value="CLOSED">Closed</MenuItem>
          <MenuItem value="ALL">All</MenuItem>
        </TextField>
        {/* <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Type"
          select
          name="type"
          onChange={(val) => setType(val.target.value)}
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="BUG">Bug</MenuItem>
          <MenuItem value="TASK">Task</MenuItem>
          <MenuItem value="ISSUE">Issue</MenuItem>
          <MenuItem value="FEATURE">Feature</MenuItem>
          <MenuItem value="ALL">All</MenuItem>
        </TextField> */}

        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Priority"
          select
          name="priority"
          onChange={(val) => setPriority(val.target.value)}
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="MINOR">Minor</MenuItem>
          <MenuItem value="LOW">Low</MenuItem>
          <MenuItem value="MEDIUM">Medium</MenuItem>
          <MenuItem value="HIGH">High</MenuItem>
          <MenuItem value="ALL">All</MenuItem>
        </TextField>

        <Button
          onClick={(e) => {
            console.log("filter");
            filter(name, status, type, priority, project, assigned);
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
          to={TASKS + "/new"}
          color="secondary"
          variant="contained"
          sx={{ gridColumn: "span 1" }}
          endIcon={<AddIcon />}
        >
          CREATE
        </Button>
      </Box>

      {/* TASKS LIST */}
      <Box display="flex" flexWrap="wrap" width="100%" gap={1}>
        {tasks.map((task, index) => (
          <Box width="250px">
            <TaskCard key={index} task={task} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Tasks;
