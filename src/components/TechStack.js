import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJsSquare,
  faPython,
  faReact,
  faHtml5,
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const technologies = [
  { icon: faJava, name: "Java" },
  { icon: faJsSquare, name: "JavaScript" },
  { icon: faPython, name: "Python" },
  { icon: faReact, name: "React" },
  { icon: faHtml5, name: "HTML5" },
  { icon: faCss3Alt, name: "CSS3" },
  { icon: faDocker, name: "Docker" },
  { icon: faGit, name: "Git" },
  { icon: faGithub, name: "GitHub" },
];

const TechStack = () => {
  return (
    <div id="tech-stack">
      <Container>
        <Typography
          id="technologies-leverage"
          variant="h4"
          sx={{
            marginTop: "5rem",
            fontFamily: "sans-serif",
            // fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Technologies I Leverage
        </Typography>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {technologies.map((tech, index) => (
              <Grid item xs={4} sm={2} key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <FontAwesomeIcon
                    icon={tech.icon}
                    style={{
                      fontSize: "4rem",
                      color: "#4caf50", // You can customize colors here
                      marginBottom: "0.5rem",
                    }}
                  />
                  <Typography variant="h6">{tech.name}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default TechStack;
