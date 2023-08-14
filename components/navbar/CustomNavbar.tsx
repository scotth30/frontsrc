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
    <AppBar position="sticky" sx={{minHeight: '50px'}}>
      <Toolbar>
        <Hidden smDown> {/* This line hides the navbrand for small screens */}
          <Button component={Link} to="/" color="inherit" sx={{ width: '15%', minHeight: '50px', textAlign: 'left' }}>Hedman Software</Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen} sx={{minHeight: '50px', minWidth: '50px'}}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{minHeight: '50px', minWidth: '50px'}}>
            <MenuItem component={Link} to="/">Home</MenuItem>
            <MenuItem component={Link} to="/about">About</MenuItem>
            <MenuItem component={Link} to="/features">Features</MenuItem>
            <MenuItem component={Link} to="/resources">Resources</MenuItem>
          </Menu>
        </Hidden>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Hidden smDown>
            <Box display="flex" justifyContent="center" flexGrow={1}>
              <Button color="inherit" component={Link} to="/" sx={{minHeight: '50px', minWidth: '50px'}}>Home</Button>
              <Button color="inherit" component={Link} to="/features" sx={{minHeight: '50px', minWidth: '50px'}}>Features</Button>
              <Button color="inherit" component={Link} to="/about" sx={{minHeight: '50px', minWidth: '50px'}}>About</Button>
              <Button color="inherit" component={Link} to="/resources" sx={{minHeight: '50px', minWidth: '50px'}}>Resources</Button>
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
                <Button component={Link} to="/login" color="inherit" sx={{minHeight: '50px', minWidth: '50px'}}>Login</Button>
                <Button component={Link} to="/signup" color="inherit" sx={{minHeight: '50px', minWidth: '50px'}}>Signup</Button>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
