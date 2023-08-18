import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import PictureGenerator from '../../components/picture/PictureGenerator';
import {
  SideSearchContainer,
  SidebarContainer,
  DashboardContainer,
  DashboardMain,
  ButtonsContainer,
} from '../../styles/Dashboard.styles';
import { AuthContext } from '../../context/AuthContext';
import CustomerViewWrapper from '../client/CustomerViewWrapper'; // Adjust the path to the correct location
import ProjectWithSideBar from '../projectview/ProjectWithSideBar';
import { Paper } from '@mui/material';
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
        <Paper elevation={0}>
        <DashboardMain isExpanded={isExpanded}>
          <Routes>
            <Route path="/" element={<CustomerViewWrapper />} /> {/* Default route */}
            <Route path="generatePicture" element={<PictureGenerator />} />
            <Route path="customer" element={<CustomerViewWrapper />} />
            <Route path="Project" element={<ProjectWithSideBar />} />
          </Routes>
        </DashboardMain>
        </Paper>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;



