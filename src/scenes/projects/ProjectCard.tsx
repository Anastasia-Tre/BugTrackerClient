import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Label from "../../components/Label";
//import { Project } from "../../types/types";

const ProjectCard = (props: {name: string, tasksDone: number, tasksTotal: number, time: string}) => {
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
              <Label text="OPEN" color={colors.greenAccent[400]} />
              <Label text="CLOSED" color={colors.redAccent[400]} />
            </Box>
  
            <Typography
              variant="h4"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 5px 0" }}
            >
              {props.name}
            </Typography>
  
            {/* PROGRESS BAR */}
            <Box sx={{ m: "0px 5px 0px 0px" }}>
              <Typography
                variant="h5"
                color={colors.grey[100]}
                sx={{ m: "10px 0 5px 0" }}
              >
                Tasks done: {props.tasksDone} / {props.tasksTotal}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(props.tasksDone / props.tasksTotal) * 100}
                color="secondary"
              />
            </Box>
          </Box>
  
          {/* TIME ICON */}
          <Box display="flex" justifyContent="flex-end">
            <AccessTimeIcon />
            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "0px 0 0px 3px" }}
            >
              {props.time}
            </Typography>
          </Box>
        </Box>
      </div>
    );
  };
  
  export default ProjectCard;