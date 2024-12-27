import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  Modal,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"; // Import play button icon
import Slider from "react-slick"; // Import react-slick slider
import "slick-carousel/slick/slick.css"; // Import slick slider CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick slider theme CSS

import cricket1 from "../assets/cricket1.jpeg";
import cricket2 from "../assets/cricket2.jpeg";
import cricket3 from "../assets/cricket3.jpg";
import cricket5 from "../assets/cricket5.jpg";
import cricket6 from "../assets/cricket6.jpg";

const About = () => {
  const text =
    "I am a recent graduate with a First-Class Honours degree in Software Engineering, bringing a solid foundation in programming, problem-solving, and software development. Over the past year, I gained valuable hands-on experience as a Software Engineering Intern, where I contributed to real-world projects and honed my skills in a professional environment. I am passionate about building innovative software solutions and am eager to apply my knowledge and experience in a dynamic team setting.".split(
      ""
    );

  const text2 =
    "If I weren't immersed in the world of technology, you would probably find me on the cricket field, chasing my dreams as a professional cricket player. My passion for cricket runs deep; from my early days playing Under 13 cricket to leading my school’s 1st XI team, and proudly vice-captaining the Under 15 squad, cricket has always been a significant part of my life. At university, I had the honor of captaining our cricket team, and I even represented the creative software cricket team. The thrill of the game, the camaraderie, and the spirit of competition are experiences that have shaped me just as much as my journey in tech.".split(
      ""
    );

  const [openVideo, setOpenVideo] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenVideo = (videoUrl) => {
    setOpenVideo(videoUrl);
    setIsFullscreen(false);
  };

  const handleCloseVideo = () => {
    setOpenVideo(null);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id="about">
      <Container>
        <Typography
          variant="h4"
          sx={{
            marginTop: "30rem",
            marginBottom: "-1rem",
            fontFamily: "sans-serif",
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            marginTop: "2rem",
            fontFamily: "sans-serif",
            mb: 4,
            textAlign: "justify",
          }}
        >
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: i / 100,
              }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            marginTop: "5rem",
            marginBottom: "-3rem",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          Insights of my Intern Experience
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12} md={6}>
            <Card
              onClick={() =>
                handleOpenVideo("https://www.youtube.com/embed/z3It0pmbjkg")
              }
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden", // Ensure hover effects don't overflow
                "&:hover": {
                  transform: "scale(1.05)", // Slightly enlarge the card on hover
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)", // Add a shadow
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                },
              }}
            >
              <CardMedia
                component="img"
                image="https://img.youtube.com/vi/z3It0pmbjkg/0.jpg"
                alt="YouTube Video"
                sx={{
                  border: "1px solid grey",
                  height: "300px",
                  borderRadius: "4px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <PlayCircleOutlineIcon
                  sx={{ fontSize: "4rem", opacity: 0.8 }} // Play button style
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              onClick={() =>
                handleOpenVideo("https://www.youtube.com/embed/slrE70OL8L0")
              }
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden", // Ensure hover effects don't overflow
                "&:hover": {
                  transform: "scale(1.05)", // Slightly enlarge the card on hover
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)", // Add a shadow
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                },
              }}
            >
              <CardMedia
                component="img"
                image="https://img.youtube.com/vi/slrE70OL8L0/0.jpg"
                alt="YouTube Video"
                sx={{
                  border: "1px solid grey",
                  height: "300px",
                  borderRadius: "4px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <PlayCircleOutlineIcon
                  sx={{ fontSize: "4rem", opacity: 0.8 }} // Play button style
                />
              </Box>
            </Card>
          </Grid>
        </Grid>

        <AnimatePresence>
          {openVideo && (
            <Modal open={true} onClose={handleCloseVideo} sx={{ zIndex: 1500 }}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  width: "100vw",
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
              >
                <IconButton
                  onClick={handleCloseVideo}
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    color: "#fff",
                    zIndex: 2000,
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <motion.div
                  style={{
                    width: isFullscreen ? "80vw" : "60vw",
                    height: isFullscreen ? "80vh" : "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <iframe
                    src={`${openVideo}?autoplay=1`}
                    title="YouTube Video"
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                  ></iframe>
                  <IconButton
                    onClick={toggleFullscreen}
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      color: "#fff",
                      zIndex: 2000,
                    }}
                  >
                    {isFullscreen ? <CloseIcon /> : <CloseIcon />}
                  </IconButton>
                </motion.div>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>

        <Typography
          variant="h4"
          sx={{
            marginTop: "10rem",
            marginBottom: "-2rem",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          What if I wasn’t in Tech?
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            marginTop: "4rem",
            fontFamily: "sans-serif",
            mb: 4,
            textAlign: "justify",
          }}
        >
          {text2.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: i / 100,
              }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </Typography>

        {/* Cricket images slider */}
        <center>
        <Slider {...sliderSettings}>
          {[cricket1, cricket2, cricket3, cricket5, cricket6].map(
            (image, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <img
                  src={image}
                  alt={`Cricket ${index + 1}`}
                  style={{
                    borderRadius: "15px",
                    maxWidth: "80%",
                    maxHeight: "500px",
                  }}
                />
              </Box>
            )
          )}
        </Slider>
        </center>
      </Container>
    </div>
  );
};

export default About;
