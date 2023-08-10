import React, { useEffect, useState } from 'react';

import { Button, IconButton,  Menu, MenuItem, Box, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '../../firebaseConfig'; // Correct the path to point to your firebaseConfig.ts file
import {
  CustomAppBar,
  CustomToolbar,
  NavBrand,
  NavItem,
  LogoutButton,
  LoginButton,
  SignupButton, CustomSearchTextField, CustomSearchIconButton 
} from '../../styles/CustomNavbar.styles';
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
    <CustomAppBar position="static">
      <CustomToolbar>
        <NavBrand to="/">Hedman Software</NavBrand>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={NavItem} to="/">Home</MenuItem>
            <MenuItem component={NavItem} to="/about">About</MenuItem>
            <MenuItem component={NavItem} to="/features">Features</MenuItem>
            <MenuItem component={NavItem} to="/resources">Resources</MenuItem>
          </Menu>
        </Hidden>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Hidden smDown>
            <Box display="flex" justifyContent="center" flexGrow={1}>
              <Button color="inherit" component={NavItem} to="/">Home</Button>
              <Button color="inherit" component={NavItem} to="/features">Features</Button>
              <Button color="inherit" component={NavItem} to="/about">About</Button>
              <Button color="inherit" component={NavItem} to="/resources">Resources</Button>
            </Box>
          </Hidden>
          <Box display="flex">
            {loggedIn ? (
              <>
              <CustomSearchTextField
                variant="outlined"
                placeholder="Search..."
                // Add other desired TextField props
              />
              <CustomSearchIconButton>
                <SearchIcon />
              </CustomSearchIconButton>
                <LogoutButton onClick={() => auth.signOut()}>Logout</LogoutButton>
              </>
            ) : (
              <>
                <LoginButton to="/login">Login</LoginButton>
                <SignupButton to="/signup">Signup</SignupButton>
              </>
            )}
          </Box>
        </Box>
      </CustomToolbar>
    </CustomAppBar>
  );
};

export default CustomNavbar;