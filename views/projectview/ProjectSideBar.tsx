import React from 'react';
import { ListItemButton, IconButton, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ProjectSideBarProps {
  isExpanded: boolean;
  setExpanded: (expanded: boolean) => void;
  setCurrentView: (view: string) => void;
}

const ProjectSideBar: React.FC<ProjectSideBarProps> = ({ isExpanded, setExpanded, setCurrentView }) => {
  const handleClick = (view: string) => {
    setCurrentView(view); // Sets the current view for the Project container
  };

  return (
    <Container style={{ width: isExpanded ? '15%' : '5%', height: '100%' }}>
      <IconButton onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </IconButton>
      <ListItemButton onClick={() => handleClick('AddProject')}>Add Project</ListItemButton>
      <ListItemButton onClick={() => handleClick('AddWell')}>Add Well</ListItemButton>
      <ListItemButton onClick={() => handleClick('AddCustomer')}>Link Customer to Project</ListItemButton>
      <ListItemButton onClick={() => handleClick('WellActivity')}>Add Service Report</ListItemButton>
    </Container>
  );
};

export default ProjectSideBar;
