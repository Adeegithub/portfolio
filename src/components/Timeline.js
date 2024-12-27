import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import uow from "../assets/uow.png";
import iitLogo from "../assets/iitLogo.png";
import deakinLogo from "../assets/deakinLogo.svg";
import eccLogo from "../assets/eccLogo.png";
import MahindaCollegeLogo from "../assets/MahindaCollegeLogo.jpeg";

const timelineData = [
  {
    title: "BEng(Hons) Software Engineering with Industrial Placement",
    university: "University of Westminster",
    dateRange: "2021-2024",
    grade: "Grade: First Class Honours",
    description: "Affliated with Informatics Institute of Sri Lanka (IIT)",
    logo: [uow, iitLogo],
  },
  {
    title: "Bsc Computer Science",
    university: "Deakin University, Melbourne",
    dateRange: "2018 – 2021",
    description: " Major: Data Science (O/H)",
    logo: [deakinLogo],
  },
  {
    title: "Diploma of Science Computing/IT",
    university: "Edit Cowan College",
    dateRange: "2017-2018",
    grade: "Grade: Distinction",
    description:
      "Affliated with ACBT - Australian College of Business & Technology",
    logo: [eccLogo],
  },
  {
    title: "GCE Advance Levels (A/Ls)",
    university: "Mahinda College Galle",
    dateRange: "2016",
    grade: "Stream: Physical Sciene",
    logo: [MahindaCollegeLogo],
  },
  {
    title: "GCE Ordinary Levels (O/Ls)",
    university: "Mahinda College Galle",
    dateRange: "2013",
    grade: "Medium: English",
    logo: [MahindaCollegeLogo],
  },
];

const Timeline = () => {
  return (
    <Box
      sx={{
        height: "500px", // Adjust this height as needed
        overflowY: "auto",
        padding: "1rem",
        borderRadius: "8px", // Optional: adds rounded corners
      }}
    >
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          style={{ display: "flex", marginBottom: "2rem" }}
        >
          <Box
            sx={{
              position: "relative",
              marginRight: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "50px",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#F25A29",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            />
            {index !== timelineData.length - 1 && (
              <Box
                sx={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "#F25A29",
                }}
              />
            )}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>

            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ fontWeight: "bold" }}
            >
              {item.dateRange}
            </Typography>

            <Typography variant="h6">{item.university}</Typography>

            <Typography sx={{ fontWeight: "bold" }}>{item.grade}</Typography>

            <Typography variant="body1">{item.description}</Typography>

            {item.logo && (
                <Box sx={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
                {item.logo.map((logo, logoIndex) => (
                  <Box
                    key={logoIndex}
                    component="img"
                    src={logo}
                    sx={{
                      width: 60, // Adjust the size of the logos
                      height: 60,
                      borderRadius: "50%",
                      border: "2px solid #ccc", // Optional: border around the logo
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default Timeline;
