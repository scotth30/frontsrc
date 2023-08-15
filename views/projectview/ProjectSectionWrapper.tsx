import * as React from 'react';
import { Paper, Tabs, Tab, Box } from '@mui/material';
import ProjectPage from './ProjectPage';
import ProjectCustomerWrapper from './ProjectCustomerWrapper';
import ProjectServiceWrapper from './projectServiceWrapper';

const ProjectSectionWrapper: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper elevation={3}>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Projects" />
        <Tab label="Customers" />
        <Tab label="Service" />
      </Tabs>
      <Box p={3}>
        <Box hidden={selectedTab !== 0}>
          <ProjectPage />
        </Box>
        <Box hidden={selectedTab !== 1}>
          <ProjectCustomerWrapper />
        </Box>
        <Box hidden={selectedTab !== 2}>
          <ProjectServiceWrapper />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectSectionWrapper;
