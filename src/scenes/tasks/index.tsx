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
import { tokens } from "../../theme";
import { testData } from "../../types/Task";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const Tasks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          <MenuItem value="NEW">New</MenuItem>
          <MenuItem value="PROGRESS">In Progress</MenuItem>
          <MenuItem value="TESTING">Testing</MenuItem>
          <MenuItem value="CLOSED">Closed</MenuItem>
        </TextField>
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Type"
          select
          name="type"
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="BUG">Bug</MenuItem>
          <MenuItem value="TASK">Task</MenuItem>
          <MenuItem value="ISSUE">Issue</MenuItem>
          <MenuItem value="FEATURE">Feature</MenuItem>
        </TextField>

        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          label="Priority"
          select
          name="priority"
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value="MINOR">Minor</MenuItem>
          <MenuItem value="LOW">Low</MenuItem>
          <MenuItem value="MEDIUM">Medium</MenuItem>
          <MenuItem value="HIGH">High</MenuItem>
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

      {/* <TaskForm task={testData[0]}></TaskForm> */}
      {/* TASKS LIST */}
      <Box display="flex" flexWrap="wrap" width="100%" gap={1}>
        {testData.map((task, index) => (
          <Box width="250px">
            <TaskCard key={index} task={task} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Tasks;
