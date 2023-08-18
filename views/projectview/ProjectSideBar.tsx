  import React from 'react';
  import { ListItemButton, IconButton, Drawer, Box } from '@mui/material';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';

  export interface ProjectSideBarProps {
    isExpanded: boolean;
    setExpanded: (expanded: boolean) => void;
    setCurrentView: (view: string) => void;
  }

  const ProjectSideBar: React.FC<ProjectSideBarProps> = ({ isExpanded, setExpanded, setCurrentView }) => {
    const handleClick = (view: string) => {
      setCurrentView(view);
    };

    return (
      <Drawer
        open={isExpanded}
        variant="permanent"
        sx={{
          width: isExpanded ? '15%' : '5%',
          flexShrink: 0,
          '& .MuiDrawer-root': {
            position: 'absolute',
          },
          '& .MuiPaper-root': {
            position: 'absolute',
            width: isExpanded ? '15%' : '5%',
            background: 'rgba(13, 110, 253, 0.7)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: isExpanded ? 'flex-end' : 'flex-start' , overflowX: 'hidden' , borderLeft: '1px solid #bababa'}}> {/* Flex container to control IconButton location */}
          <IconButton onClick={() => setExpanded(!isExpanded)}>
            {isExpanded ? <ArrowBackIcon /> : <ArrowForwardIcon />}
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'center', alignItems: 'stretch', overflowX: 'hidden', marginTop: '-25px', borderLeft: '1px solid #bababa' }}> {/* Flex container for buttons */}
          <ListItemButton sx={{ flex: '0 1 auto' }} onClick={() => handleClick('AddProject')}>Add Project</ListItemButton>
          <ListItemButton sx={{ flex: '0 1 auto' }} onClick={() => handleClick('AddWell')}>Add Well</ListItemButton>
          <ListItemButton sx={{ flex: '0 1 auto' }} onClick={() => handleClick('AddCustomer')}>Link Customer to Project</ListItemButton>
          <ListItemButton sx={{ flex: '0 1 auto' }} onClick={() => handleClick('WellActivity')}>Add Service Report</ListItemButton>
        </Box>
      </Drawer>
    );
  };

  export default ProjectSideBar;
