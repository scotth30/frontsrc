import React, { useState } from 'react';
import TopBar from './TopBarView';
import SearchBar from '../../components/searchbar/SearchBar';
import ProjectPage from './ProjectPage';
import Paper from '@mui/material/Paper'; // Import Paper from Material-UI

const Project: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // TODO: Utilize currentView and setIsExpanded as per project requirements

  return (
    // Wrap the entire component in a Paper element to give a boxed appearance
    <Paper style={{ width: '100%', height: '100%' }}> 
      <div style={{ padding: '5px', paddingRight: '15px', width: '100%', height: '20%' }}>
        <TopBar />
      </div>
      <div style={{ paddingBottom: '5px', paddingLeft: '5px', paddingRight: '15px', width: '100%', height: '5%' }}>
        <SearchBar setCurrentView={setCurrentView} isExpanded={isExpanded} />
      </div>
      <div style={{ padding: '5px', paddingRight: '15px', paddingLeft: '5px', width: '100%', height: '75%' }}>
        <ProjectPage />
      </div>
    </Paper>
  );
};

export default Project;
