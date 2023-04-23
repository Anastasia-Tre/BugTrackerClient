import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GetLabel from "../../components/Label";
import { Task } from "../../types/Task";

const TaskCard = (props: { task: Task }) => {
  const task = props.task;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Box
        sx={{
          height: 200,
          width: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "15px",
          border: 1,
          borderRadius: "15px",
          margin: 1,
        }}
      >
        <Box display="flex" flexDirection="column">
          {/* LABELS BOX */}
          <Box display="flex" mb="3px">
            {GetLabel(task.type.toLowerCase())}
            {GetLabel(task.status.toLowerCase())}
            {GetLabel(task.priority.toLowerCase())}
          </Box>

          <Typography
            variant="h4"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 15px 0" }}
          >
            {task.name}
          </Typography>

          <Typography
            variant="h5"
            color={colors.grey[100]}
            sx={{ m: "0px 0 5px 0" }}
          >
            Assign to: <i>{task.assignee}</i>
          </Typography>

          <Typography
            variant="h5"
            color={colors.grey[100]}
            sx={{ m: "0px 0 5px 0" }}
          >
            Project: <i>{task.project}</i>
          </Typography>
        </Box>

        {/* TIME ICON */}
        <Box display="flex" justifyContent="flex-end">
          <AccessTimeIcon />
          <Typography
            variant="h6"
            color={colors.grey[200]}
            sx={{ m: "0px 0 0px 3px" }}
          >
            {task.deadline}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default TaskCard;
