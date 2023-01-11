import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Button to="/" color="inherit" component={Link} sx={{ flexGrow: 1 }}>
            Обо мне
          </Button>
          <Button to="/portfolio" color="inherit" component={Link} sx={{ flexGrow: 1 }}>
            Портфолио
          </Button>
          <Button to="/blog" color="inherit" component={Link} sx={{ flexGrow: 1 }}>
            Блог
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
