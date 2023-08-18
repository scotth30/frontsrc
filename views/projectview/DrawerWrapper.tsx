import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import ProjectSideBar from './ProjectSideBar';
interface DrawerWrapperProps {
  open: boolean;
  handleDrawerClose: () => void;
  children?: React.ReactNode; // Explicitly define the children prop
}

const DrawerWrapper: React.FC<DrawerWrapperProps> = ({ open, handleDrawerClose, children }) => {
  return (
    <MuiDrawer variant="permanent" open={open}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Box>{children}</Box> {/* Now, children prop is recognized */}
    </MuiDrawer>
  );
};

export default DrawerWrapper;
