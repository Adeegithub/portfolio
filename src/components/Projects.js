import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Badge,
} from "@mui/material";
import { motion } from "framer-motion";

import PulseLanka from "../assets/nlp.webp";
import WeatherApp from "../assets/weather.webp";
import SmartBulb from "../assets/smartbulb.jpg";
import EMS from "../assets/ems.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Pulse Lanka ",
    description: `Final Year Research Project. Pulse Lanka is an opinion mining system which extracts the
    sentiments of the reviews which are in Sri Lankan e-commerce platforms. This system extracts
    the sentiments of code-mixed and code- switched Sinhalese texts which are posted as reviews.
    Technologies – NLP, Python, ReactJS, Flask.`,
    image: PulseLanka,
    link: "https://github.com/Adeegithub/backendFYP",
    isPrivate: true,
  },
  {
    title: "WeatherGlobe – iOS Application",
    description: `Developed an iOS application to search weather forecasts around the globe. Users can select the
    time zone preference, and then it displays the current weather, daily and weekly forecasts. App is
    designed using MVVM architecture. Weather forecasts are fetched from OpenWeather API.
    Technologies – SwitUI`,
    image: WeatherApp,
    link: "https://github.com/Adeegithub/WeatherApp",
    isPrivate: false,
  },
  {
    title: "Smart Adaptive Light System",
    description: `Created a smart lighting system that learns and adapts to the user preferences for brightness
    levels and colour temperature with and IoT and Machine Learning aspect. This was a group project done at while I was 
    in the 2nd year at university. Role – Developing the prototype (IoT aspect with Arduino) Technologies – Arduino, 
    Flutter, Firebase`,
    image: SmartBulb,
    link: "https://github.com/Akshay-De-Silva/Team-Sigma-Repo",
    isPrivate: false,
  },
  {
    title: "Employee Management System",
    description: `Developed a full stack application which performs CRUD operations with an employee database.
    Technologies – Java, Java Spring boot, ReactJS, MySQL. This Project is in two respective repos for Backend and 
    Frontend`,
    image: EMS,
    link: "https://github.com/Adeegithub/ems-backend",
    isPrivate: false,
  },
  {
    title: "Portfolio Website",
    description: `Developed a portfolio website to showcase my skills and projects. This allows me to prsent my skills,
    experience and personality as Software Engineer in the field. The Project was done using React, JavaScript, Material UI,
    Framer Motion Library`,
    image: portfolio,
    link: "#",
    isPrivate: false,
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <Container>
        <Typography
          variant="h4"
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            fontFamily: "sans-serif",
            // fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Have a Sneak Peak into my Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "10px" }}
                    >
                      View On GitHub
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
