import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
import SearchBar from '../searchbar/SearchBar';
import AddProject from '../addproject/AddProject';
import PictureGenerator from '../picture/PictureGenerator';
import {
  SideSearchContainer,
  SidebarContainer,
  SearchbarContainer,
  DashboardContainer,
  DashboardMain,
  ButtonsContainer,
} from '../../styles/Dashboard.styles';
import { AuthContext } from '../../context/AuthContext';
import ClientView from './client/ClientView'; // Adjust the path to the correct location

const Dashboard: React.FC = () => {
  const auth = useContext(AuthContext);
  const currentUser = auth ? auth.currentUser : null;
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  return (
    <div>
            <DashboardContainer>
      <SideSearchContainer isExpanded={isExpanded}>
        <SidebarContainer isExpanded={isExpanded}>
          <SideBar setIsExpanded={setIsExpanded} />
        </SidebarContainer>
        <SearchbarContainer>
          <SearchBar setCurrentView={() => {}} isExpanded={isExpanded} />
        </SearchbarContainer>
        <ButtonsContainer>
          {/* Buttons go here */}
        </ButtonsContainer>
      </SideSearchContainer>

      <DashboardMain isExpanded={isExpanded}>
          <Routes>
          <Route path="addProject" element={<AddProject />} /> {/* Removed the leading slash */}
          <Route path="generatePicture" element={<PictureGenerator />} /> {/* Removed the leading slash */}
          <Route path="clientView" element={<ClientView />} /> {/* Removed the leading slash */}
        </Routes>
        </DashboardMain>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
