import { Box, Divider, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import TaskCardShort from "../tasks/TaskCardShort";
import { testData } from "../../types/Task";
import TaskCard from "../tasks/TaskCard";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* TASK IN FOCUS */}
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        width="40%"
        sx={{ m: "0 0 5px 0" }}
      >
        <Typography fontSize="20px" color={colors.grey[4]} align="center">
          TASK IN FOCUS
        </Typography>
        <Divider
          style={{
            backgroundColor: colors.grey[4],
            height: "1px",
            marginBottom: 1,
          }}
        />
        <TaskCard task={testData[3]} />
      </Box>

      {/* NOW OR LATER? */}
      <Box display="flex" flexDirection="column" flexWrap="wrap" width="40%">
        <Typography fontSize="20px" color={colors.grey[4]} align="center">
          NOW OR LATER?
        </Typography>
        <Divider
          style={{
            backgroundColor: colors.grey[4],
            height: "1px",
            marginBottom: 1,
          }}
        />
        {testData.map((task, index) => (
          <TaskCardShort key={index} task={task} />
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
