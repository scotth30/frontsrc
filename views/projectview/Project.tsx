import React, { useState } from 'react'; // Import useState
import TopBar from './TopBarView'; // Assuming TopBar.tsx includes UserInfoView.tsx and AddressView.tsx
import SearchBar from '../../components/searchbar/SearchBar';
import ProjectPage from './ProjectPage';

const Project: React.FC = () => {
  // Declare a state for the current view and a function to change it
  const [currentView, setCurrentView] = useState<string>(''); 

  // Declare a state for the SearchBar expanded status
  const [isExpanded, setIsExpanded] = useState<boolean>(false); 

  // TODO: Utilize currentView and setIsExpanded as per project requirements

  return (
    <div style={{  width: '100%', height: '100%' }}>
      <div style={{ padding: '5px', paddingRight: '15px', width: '100%', height: '20%' }}>
        <TopBar />
      </div>
      <div style={{ paddingBottom: '5px', paddingLeft: '5px', paddingRight: '15px', width: '100%', height: '5%' }}>
        <SearchBar setCurrentView={setCurrentView} isExpanded={isExpanded} /> {/* Pass the props here */}
      </div>
      <div style={{ padding: '5px', paddingRight: '15px', paddingLeft: '5px', width: '100%', height: '75%' }}>
        <ProjectPage />
      </div>
    </div>
  );
};

export default Project;
