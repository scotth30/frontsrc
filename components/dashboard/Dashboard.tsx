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
  DashboardMain, ButtonsContainer
} from '../../styles/Dashboard.styles';
import { AuthContext } from '../../context/AuthContext';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
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
      <SideSearchContainer isExpanded={isExpanded}>
        <SidebarContainer isExpanded={isExpanded}>
          <SideBar setIsExpanded={setIsExpanded} />
        </SidebarContainer>
        <SearchbarContainer>
          <SearchBar setCurrentView={() => {}} isExpanded={isExpanded} /> {/* Added the isExpanded prop here */}
        </SearchbarContainer>
        <ButtonsContainer>
          {/* Buttons go here */}
        </ButtonsContainer>
      </SideSearchContainer>
      <DashboardContainer>
        <DashboardMain>
          <Routes>
            <Route path="/addProject" element={<AddProject />} />
            <Route path="/generatePicture" element={<PictureGenerator />} />
          </Routes>
        </DashboardMain>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
