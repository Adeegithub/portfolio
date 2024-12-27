import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import myImage from "../assets/profile.jpg";
import Timeline from "./Timeline";
import WorkTimeLine from "./WorkTimeLine";

const text = "ADEESHA GUNAWARDANA".split("");
const items = [
  { id: "education", title: "Education" },
  { id: "work", title: "Work Experience" },
];

const Hero = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div id="home">
      <Container
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <motion.img
          src={myImage}
          alt="Profile Picture"
          style={{
            borderRadius: "50%",
            width: "160px",
            height: "160px",
            objectFit: "cover",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        />
        <Typography
          variant="h3"
          component="div"
          sx={{
            marginTop: "2rem",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            mb: 4,
          }}
        >
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i / 10,
              }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{
            maxWidth: "600px",
            padding: "0rem",
            marginBottom: "10rem",
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "text.secondary",
            mb: 4,
          }}
        >
          SOFTWARE ENGINEER
        </Typography>

        <Box
          sx={{
            maxWidth: "800px",
            maxHeight: "60",
            padding: "2rem",
            marginBottom: "4rem",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px #F77D00",
          }}
        >
          <Typography fontSize={20} variant="body1">
            I am passionate about building innovative software solutions and am
            eager to apply my knowledge and experience in a dynamic team
            setting.
          </Typography>
        </Box>

        {/* Card container with responsive flex */}
        <Box
          sx={{
            marginBottom: "-20rem",
            display: "flex",
            gap: "16px",
            flexDirection: {
              xs: "column", // Stacks vertically on small screens
              sm: "row", // Side by side on medium+ screens
            },
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              style={{
                position: "relative",
                cursor: "pointer",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 8px #F77D00",
                minWidth: "300px",
                transition: "all 0.3s ease-in-out", // Smooth transition for hover effect
              }}
              onClick={() => setSelectedId(item.id)}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 1, fontSize: "12px" }}
              >
                Tap to expand
              </Typography>
            </motion.div>
          ))}
        </Box>

        <AnimatePresence>
          {selectedId && (
            <motion.div
            layoutId={selectedId}
            style={{
              position: "relative",
              top: -200,
              left: 0,
              height: "75vh",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              overflow: "hidden",
              zIndex: 1000,
              minWidth: window.innerWidth < 600 ? "100%" : "700px",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            sx={{
              width: {
                xs: "100vw", // Full width on small screens
                sm: "50vw",  // 50% width on medium+ screens
              },
            }}
          >
              <Typography
                variant="h4"
                sx={{ mt: 4, mb: 2, textAlign: "center" }}
              >
                {items.find((item) => item.id === selectedId)?.title}
              </Typography>

              {selectedId === "education" && <Timeline />}
              {selectedId === "work" && <WorkTimeLine />}

              <motion.div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                  fontSize: "24px",
                  color: "#333",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Hero;
