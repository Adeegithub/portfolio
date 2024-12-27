import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Alert,
  Box,
} from "@mui/material";

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: false,
  });

  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = validateEmail(formData.email);

    if (!isValidEmail) {
      setFormErrors({ emailError: true });
      setSubmissionMessage("Please enter a valid email address.");
      return;
    }

    emailjs
      .send(
        "service_5qmpnpk", 
        "template_vozcn4i",
        formData,
        "rVXWM_3J8NBNwDvfA"
      )
      .then(
        (response) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setFormErrors({ emailError: false });
          setSubmissionMessage("Thank you! Your message has been sent.");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSubmissionMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="get in touch">
      <Container sx={{ marginTop: "4rem" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontFamily={"sans-serif"}
        >
          Get in Touch!
        </Typography>

        <Typography
          variant="h6"
          align="center"
          gutterBottom
          fontFamily={"sans-serif"}
        >
          Wanna see how my skills align with your requirements? Shoot to my inbox for my resume.
        </Typography>

        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "5px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={formErrors.emailError}
                  helperText={
                    formErrors.emailError ? "Invalid email address." : ""
                  }
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "5px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "5px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    padding: "0.5rem 2rem",
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#1976d2",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
              {submissionMessage && (
                <Grid item xs={12}>
                  <Alert severity={formErrors.emailError ? "error" : "success"}>
                    {submissionMessage}
                  </Alert>
                </Grid>
              )}
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default HireMe;
