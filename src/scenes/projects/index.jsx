import { Box, Chip, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import { SelectField } from "react-admin";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
//import { Project } from "../../types/types";

const Projects = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROJECTS" subtitle="Welcome to your projects" />
      </Box>
      <ProjectCard />
    </Box>
  );
};

const Label = ({ text, color }) => {
  return (
    <Box mr="10px">
      <Chip
        label={text}
        size="small"
        variant="outlined"
        style={{
          color: color,
          border: `1px solid ${color}`,
        }}
      ></Chip>
    </Box>
  );
};

const ProjectCard = (/*props: { project?: Project }*/) => {
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
            Name of the project
          </Typography>

          {/* PROGRESS BAR */}
          <Box sx={{ m: "0px 5px 0px 0px" }}>
            <Typography
              variant="h5"
              color={colors.grey[100]}
              sx={{ m: "10px 0 5px 0" }}
            >
              Tasks done: 25 / 50
            </Typography>
            <LinearProgress
              variant="determinate"
              value="50"
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
            12d
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
