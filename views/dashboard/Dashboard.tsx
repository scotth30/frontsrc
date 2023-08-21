import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import WellCalculator from '../calculator/Calculator';
import {
  SideSearchContainer,
  SidebarContainer,
  DashboardContainer,
  DashboardMain,
  ButtonsContainer,
} from '../../styles/Dashboard.styles';
import CustomerViewWrapper from '../client/CustomerViewWrapper'; // Adjust the path to the correct location
import ProjectWithSideBar from '../projectview/ProjectWithSideBar';
import { Paper } from '@mui/material';

const Dashboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

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
            <Route path="calculator" element={<WellCalculator />} />
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
