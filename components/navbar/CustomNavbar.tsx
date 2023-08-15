import React, { useEffect, useState } from 'react';
import { IconButton, Menu, MenuItem, Box, Hidden, AppBar, Toolbar, TextField, ListItemButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '../../firebaseConfig';
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
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" flexGrow={.07}>
            <Hidden smDown>
              {/* Left section */}
              <ListItemButton component={Link} to="/" color="inherit">
                Hedman Software
              </ListItemButton>
            </Hidden>
          </Box>

          {/* Center section */}
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Box display="flex" justifyContent="center" alignItems="center">
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
              <Hidden smDown>
                <ListItemButton component={Link} to="/" color="inherit">Home</ListItemButton>
                <ListItemButton component={Link} to="/features" color="inherit">Features</ListItemButton>
                <ListItemButton component={Link} to="/about" color="inherit">About</ListItemButton>
                <ListItemButton component={Link} to="/resources" color="inherit">Resources</ListItemButton>
              </Hidden>
            </Box>
          </Box>

          {/* Right section */}
          <Box display="flex" alignItems= 'center'>
            {loggedIn ? (
              <>
                <TextField variant="outlined" placeholder="Search..." />
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
