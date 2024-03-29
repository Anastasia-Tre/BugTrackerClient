import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme/theme";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Project } from "../../types/Project";
import GetLabel from "../../components/Label";
import { getTimeLeftTo } from "../../utils/TimeDate";
import { PROJECTS } from "../../navigation/CONSTANTS";
import { useEffect, useState } from "react";
import { TaskService } from "../../services/taskService";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [total, setTotal] = useState<number>(0);
  const [complete, setComplete] = useState<number>(0);

  const taskService = new TaskService();

  useEffect(() => {
    async function loadData() {
      try {
        const tasks = await taskService.getAllTasksForProject(project.id || 1);
        const total = tasks.length;
        setTotal(total);
        const complete = tasks.filter(
          (task) => task.status === 3 || task.status === 4
        ).length;
        setComplete(complete);
      } catch (e) {
        console.log("Error in load data " + e);
      }
    }
    loadData();
  }, []);

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
          borderRadius: "8px",
          margin: "7px 7px 0 0",
        }}
      >
        <Box display="flex" flexDirection="column">
          {/* LABELS BOX */}
          <Box display="flex" mb="3px">
            {GetLabel(project.getStatus().toLowerCase())}
          </Box>

          <Typography
            variant="h4"
            color={colors.grey[1]}
            fontWeight="bold"
            sx={{ m: "10px 0 5px 0" }}
          >
            {project.name}
          </Typography>

          {/* PROGRESS BAR */}
          <Box sx={{ m: "0px 5px 0px 0px" }}>
            <Typography
              variant="h5"
              color={colors.grey[1]}
              sx={{ m: "10px 0 5px 0" }}
            >
              Tasks done: {complete} / {total}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(complete / total) * 100}
              color="secondary"
            />
          </Box>
        </Box>

        {/* <Box display="flex"> */}
        <Box display="flex"></Box>

        {/* TIME ICON */}
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ m: "0px 0 0px 3px" }}
        >
          <Link
            to={PROJECTS + "/" + project.id}
            state={{ stateProject: project }}
          >
            <Button size="small">Edit</Button>
          </Link>
          <Box display="flex" justifyContent="flex-end">
            <AccessTimeIcon />
            <Typography
              variant="h6"
              color={colors.grey[2]}
              sx={{ m: "0px 0 0px 3px" }}
            >
              {getTimeLeftTo(project.deadline)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProjectCard;
