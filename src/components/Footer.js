import React from "react";
import { Link as MuiLink, Container, Typography, Box } from "@mui/material";
import { Facebook, LinkedIn, GitHub, WhatsApp } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        background: 'linear-gradient(to right, #000, #333, #000)',
        py: { xs: -2, md: 6 },
        position: 'relative',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container>
        {/* Contact Section and Social Links */}
        <Box sx={{ mt: -2,mb: 1 }}> 
          {/* Social Links */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <MuiLink
              href="https://www.facebook.com/adeeshaonline"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'white',
                '&:hover': {
                  color: '#1877f2',
                  transform: 'scale(1.2)',
                  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
                },
              }}
            >
              <Facebook />
              <Typography variant="body2">Facebook</Typography>
            </MuiLink>

            <MuiLink
              href="https://www.linkedin.com/in/arunodagunawardana/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'white',
                '&:hover': {
                  color: '#0a66c2',
                  transform: 'scale(1.2)',
                  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
                },
              }}
            >
              <LinkedIn />
              <Typography variant="body2">LinkedIn</Typography>
            </MuiLink>

            <MuiLink
              href="https://github.com/Adeegithub"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'white',
                '&:hover': {
                  color: '#F77D00',
                  transform: 'scale(1.2)',
                  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
                },
              }}
            >
              <GitHub />
              <Typography variant="body2">GitHub</Typography>
            </MuiLink>

            <MuiLink
              href="https://wa.me/+94772820148"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'white',
                '&:hover': {
                  color: '#25d366',
                  transform: 'scale(1.1)',
                  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
                },
              }}
            >
              <WhatsApp />
              <Typography variant="body2">WhatsApp</Typography>
            </MuiLink>
            
          </Box>
        </Box>

        {/* Technologies Section */}
        <Box sx={{ py: 1, mb: -5 }}> {/* Reduced padding and margin */}
          <Typography variant="h6" component="p" sx={{ mb: 1 }}>Technologies used</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap', color: '#F77D00' }}>
            {['React', 'Material UI', 'Framer Motion', 'JavaScript', 'HTML5', 'CSS3', 'Docker'].map((tech) => (
              <Box
                key={tech}
                sx={{
                  bgcolor: '#333',
                  color: 'gray.300',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 1,mb: 1 }}>
            <Typography variant="body1" >
              {/* Placeholder for contact info */}
              Adeesha Gunawardana <br></br>
              © Copyright 2024 All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
