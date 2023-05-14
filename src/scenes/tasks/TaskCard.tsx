import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GetLabel from "../../components/Label";
import { Task } from "../../types/Task";
import { getTimeLeftTo } from "../../utils/TimeDate";
import { TASKS } from "../../navigation/CONSTANTS";
import { Link } from "react-router-dom";

const TaskCard = (props: { task: Task }) => {
  const task = props.task;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Box
        sx={{
          height: 220,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "15px",
          border: 1,
          borderRadius: "8px",
          margin: "8px 8px 0 0",
        }}
      >
        <Box display="flex" flexDirection="column">
          {/* LABELS BOX */}
          <Box display="flex" mb="3px">
            {GetLabel(task.getType().toLowerCase())}
            {GetLabel(task.getStatus().toLowerCase())}
            {GetLabel(task.getPriority().toLowerCase())}
          </Box>

          <Typography
            variant="h4"
            color={colors.grey[1]}
            fontWeight="bold"
            sx={{ m: "10px 0 15px 0" }}
          >
            {task.name}
          </Typography>

          <Typography
            variant="h5"
            color={colors.grey[1]}
            sx={{ m: "0px 0 5px 0" }}
          >
            Assign to: <i>{task.assigned?.getFullName()}</i>
          </Typography>

          <Typography
            variant="h5"
            color={colors.grey[1]}
            sx={{ m: "0px 0 5px 0" }}
          >
            Project: <i>{task.project?.name}</i>
          </Typography>
        </Box>

        {/* TIME ICON */}
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ m: "0px 0 0px 3px" }}
        >
          <Link to={TASKS + "/" + task.id} state={{ stateTask: task }}>
            <Button size="small">Edit</Button>
          </Link>
          <Box display="flex" justifyContent="flex-end">
            <AccessTimeIcon />
            <Typography
              variant="h6"
              color={colors.grey[2]}
              sx={{ m: "0px 0 0px 3px" }}
            >
              {getTimeLeftTo(task.deadline)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TaskCard;
