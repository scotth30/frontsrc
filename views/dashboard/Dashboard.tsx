import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import SearchBar from '../../components/searchbar/SearchBar';
import AddProject from '../../components/addproject/AddProject';
import PictureGenerator from '../../components/picture/PictureGenerator';
import {
  SideSearchContainer,
  SidebarContainer,
  SearchbarContainer,
  DashboardContainer,
  DashboardMain,
  ButtonsContainer,
} from '../../styles/Dashboard.styles';
import { AuthContext } from '../../context/AuthContext';
import ClientView from '../client/ClientView'; // Adjust the path to the correct location
import Project from '../projectview/Project';
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

        <ButtonsContainer>
          {/* Buttons go here */}
        </ButtonsContainer>
      </SideSearchContainer>
      <DashboardMain isExpanded={isExpanded}>
          <Routes>
          <Route path="addProject" element={<AddProject />} /> {/* Removed the leading slash */}
          <Route path="generatePicture" element={<PictureGenerator />} /> {/* Removed the leading slash */}
          <Route path="clientView" element={<ClientView />} /> {/* Removed the leading slash */}
          <Route path="Project" element={<Project />} />
        </Routes>
        </DashboardMain>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
