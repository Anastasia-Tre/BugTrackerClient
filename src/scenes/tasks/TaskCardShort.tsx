import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GetLabel from "../../components/Label";
import { Task } from "../../types/Task";
import { getTimeLeftTo } from "../../utils/TimeDate";

const TaskCardShort = (props: { task: Task }) => {
  const task = props.task;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Box
        sx={{
          height: "max-content",
          width: "100%",
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
          padding: "15px",
          border: 1,
          borderRadius: "8px",
          margin: "8px 8px 0 0",
        }}
      >
        {/* LABELS BOX */}
        <Box
          display="flex"
          flexDirection="column"
          sx={{ gridColumn: "span 6" }}
        >
          <Box display="flex">
            {GetLabel(task.type.toLowerCase())}
            {GetLabel(task.status.toLowerCase())}
            {GetLabel(task.priority.toLowerCase())}
          </Box>
        </Box>

        {/* TIME ICON */}
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ gridColumn: "span 4" }}
        >
          <AccessTimeIcon />
          <Typography
            variant="h6"
            color={colors.grey[2]}
            sx={{ m: "0px 0 0px 3px" }}
          >
            {getTimeLeftTo(task.deadline)}
          </Typography>
        </Box>

        {/* TASK NAME */}
        <Box sx={{ gridColumn: "span 10" }}>
          <Typography
            variant="h4"
            color={colors.grey[1]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            {task.name}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default TaskCardShort;
