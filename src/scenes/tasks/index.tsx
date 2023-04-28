import { Box } from "@mui/material";
import Header from "../../components/Header";
import { testData } from "../../types/Task";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const Tasks = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TASKS" subtitle="Welcome to your tasks" />
      </Box>
      {/* <TaskForm task={testData[0]}></TaskForm> */}
      {/* TASKS LIST */}
      <Box display="flex" flexWrap="wrap" width="100%" gap={1}>
        {testData.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </Box>
    </Box>
  );
};

export default Tasks;
