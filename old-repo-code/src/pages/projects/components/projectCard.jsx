import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProjectCard({ projectData }) {
  const { imageSrc, altText, headerText, content, path } = projectData;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        style={{ minWidth: "350px" }}
        image={imageSrc}
        alt={altText}
      />
      <CardContent
        style={{
          height: "100px",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {headerText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={path ? path : "/projects"} style={{ textDecoration: "none" }}>
          <Button size="small">Live Project</Button>
        </Link>
        <Button size="small">Code</Button>
      </CardActions>
    </Card>
  );
}
