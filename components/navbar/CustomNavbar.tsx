import React, { useEffect, useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Box, Hidden, AppBar, Toolbar, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '../../firebaseConfig'; // Correct the path to point to your firebaseConfig.ts file
import { Link } from 'react-router-dom';

const CustomNavbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{minHeight: '60px'}}>
      <Toolbar>
        <Hidden smDown> {/* This line hides the navbrand for small screens */}
          <Button component={Link} to="/" color="inherit" sx={{ width: '15%', minHeight: '60px', textAlign: 'left' }}>Hedman Software</Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={Link} to="/">Home</MenuItem>
            <MenuItem component={Link} to="/about">About</MenuItem>
            <MenuItem component={Link} to="/features">Features</MenuItem>
            <MenuItem component={Link} to="/resources">Resources</MenuItem>
          </Menu>
        </Hidden>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Hidden smDown>
            <Box display="flex" justifyContent="center" flexGrow={1}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/features">Features</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/resources">Resources</Button>
            </Box>
          </Hidden>
          <Box display="flex">
            {loggedIn ? (
              <>
                <TextField
                  variant="outlined"
                  placeholder="Search..."
                  // Add other desired TextField props
                />
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <Button onClick={() => auth.signOut()} color="inherit">Logout</Button>
              </>
            ) : (
              <>
                <Button component={Link} to="/login" color="inherit">Login</Button>
                <Button component={Link} to="/signup" color="inherit">Signup</Button>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
