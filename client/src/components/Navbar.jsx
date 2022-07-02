import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

const links = [
  {
    text: 'Wind Farms',
    url: '/farms',
  },
  {
    text: 'Turbines',
    url: '/turbines',
  },
  {
    text: 'Inspections',
    url: '/inspections',
  },
]

const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          component={Link}
          to="/"
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cyberhawk tech-test
        </Typography>
        {
          links.map(link => (
            <Button color="inherit" component={Link} to={link.url} key={link.text}>
              {link.text}
            </Button>
          ))
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;