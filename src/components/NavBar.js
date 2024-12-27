import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const headerOffset = 84; // Adjust this value based on your AppBar height
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

const NavBar = () => {
  const [activeButton, setActiveButton] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = (id) => {
    setActiveButton(id);
    scrollToSection(id);
    setDrawerOpen(false); // Close drawer when a link is clicked
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const sections = ['home', 'about', 'tech-stack', 'projects', 'get in touch'];

  return (
    <>
      <AppBar position="sticky" sx={{ background: 'linear-gradient(to right, #000, #333, #000)', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar
          component={motion.div}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {/* Logo or Brand Name */}
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#F77D00', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
            Portfolio
          </Typography>

          {/* Navigation Links for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                sx={{
                  color: activeButton === section ? '#F77D00' : '#FFFFFF', // Text color changes based on active state
                  fontWeight: 'bold',
                  '&:hover': {
                    color: '#F77D00', // Text color on hover
                  },
                  transition: 'color 0.3s',
                  marginLeft: 2
                }}
                onClick={() => handleButtonClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            sx={{
              display: { xs: 'block', md: 'none' },
              backgroundColor: '#F77D00',
              borderRadius: '5px',
              padding: '8px',
              '&:hover': {
                backgroundColor: '#FF8C00',
              },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Animated Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '75%', // Adjust the width for a more compact drawer
            background: 'linear-gradient(to bottom right, #000, #333)',
            padding: '20px',
          },
          component: motion.div,
          initial: { x: '100%' },
          animate: { x: 0 },
          transition: { type: 'spring', duration: 0.5 },
        }}
      >
        <Box
          role="presentation"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
        >
          {/* Close Icon */}
          <IconButton
            color="inherit"
            onClick={toggleDrawer(false)}
            sx={{
              color: '#F77D00',
              '&:hover': {
                color: '#FF8C00',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <List sx={{ width: '100%' }}>
            {sections.map((section) => (
              <ListItem
                button
                key={section}
                onClick={() => handleButtonClick(section)}
                sx={{
                  '&:hover .MuiListItemText-root': {
                    color: '#F77D00', // Text color on hover
                  },
                  transition: 'color 0.3s',
                }}
              >
                <ListItemText
                  primary={section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                  sx={{
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
