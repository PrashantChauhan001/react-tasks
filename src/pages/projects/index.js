import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import ProjectCard from "./components/projectCard";
import projectsData from "./projectDetails.json";

const Projects = () => {
  return <Outlet />;
};

export const ProjectsHome = () => {
  return (
    <Box marginY={"25px"}>
      <Grid container spacing={3} justifyContent="center">
        {projectsData.map((projectData) => (
          <Grid item key={projectData.id} xl>
            {/* <Grid item xl lg md sm sx > */}
            <ProjectCard projectData={projectData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
