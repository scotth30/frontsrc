import * as React from 'react';
import { Tab, Tabs, Box, Paper } from '@mui/material';
import ProjectTab from './ProjectTab';

interface ProjectInfo {
  // Add other properties needed for each project
}

const ProjectPage: React.FC = () => {
  const projects: ProjectInfo[] = [
    {}, // Example data for Project 1
    {}, // Example data for Project 2
    // Add more projects as needed
  ];
  console.log('ProjectPage');
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper elevation={3} style={{ height: '67vh', overflowY: 'auto' }}>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Projects" />
        {projects.map((project, index) => (
          <Tab key={index} label={`Project ${index + 1}`} />
        ))}
      </Tabs>
      <Box p={3}>
        <Box hidden={selectedTab !== 0}>
          <div>Projects Content for Testing</div>
        </Box>
        {projects.map((project, index) => (
          <Box key={index} hidden={selectedTab !== index + 1}>
            <ProjectTab />
            {/* Pass the specific project data to ProjectTab as needed */}
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ProjectPage;
