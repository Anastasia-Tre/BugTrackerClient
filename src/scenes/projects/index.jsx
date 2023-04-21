import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { SelectField } from "react-admin";
import Header from "../../components/Header";
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

const ProjectCard = (/*props: { project?: Project }*/) => {
  const choices = ["one", "two", "three"];

  return (
    <div>
      <Box
        sx={{
          height: 130,
          width: 195,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1em",
          border: 1,
          margin: 1,
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="left">
          <Box marginTop={0.3}>
            <Typography variant="subtitle2">{"record.name"}</Typography>
            <SelectField
              color="textSecondary"
              source="sector"
              choices={choices}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Box display="flex" alignItems="center">
            <div>
              <Typography variant="subtitle2" sx={{ mb: -1 }}>
                {120}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {"contacts"}
              </Typography>
            </div>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div>
              <Typography variant="subtitle2" sx={{ mb: -1 }}>
                {100}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {"deals"}
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
