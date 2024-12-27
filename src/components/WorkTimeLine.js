import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import creativeLogo from "../assets/creativeLogo.png"
import pageroLogo from "../assets/pageroLogo.png"
import acjLogo from "../assets/acjLogo.png"

const timelineData = [
    {
      title: "Software Engineering Intern",
      company: "Creative Software | Pagero",
      dateRange: "June 2022 - June 2023",
      department: "RnD Department",
      logo: [creativeLogo, pageroLogo],
    },
    {
        title: "International Sales Executive",
        company: "Autocom Japan",
        dateRange: "2021 - 2022",
        department: "Galle Branch",
        logo: [acjLogo],
      },
]

const WorkTimeLine = () => {
    return(
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

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{item.company}</Typography>

            <Typography sx={{ fontWeight: "bold" }}>{item.department}</Typography>

            {/* <Typography variant="body1">{item.description}</Typography> */}

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
    )

}

export default WorkTimeLine;