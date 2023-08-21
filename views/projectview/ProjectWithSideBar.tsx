import React, { useState } from 'react';
import BackWrapper from './BackWrapper';
import Project from './Project';
import ProjectSideBar from './ProjectSideBar';
import AddProject from '../addinformation/addproject/AddProject';
import AddWellLocation from '../addinformation/addproject/AddWellLocation';
import AddCustomer from '../addinformation/addcustomer/AddCustomer';
import WellActivity from '../addinformation/addproject/ServiceRecord';
import { FormState, initialCustomerInfo, initialAddress, initialWell, initialServiceRecord } from '../addinformation/addcustomer/interfaces';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
const ProjectWithSideBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<string>('');
  const [isBackWrapperOpen, setIsBackWrapperOpen] = useState<boolean>(false);

  const initialFormState: FormState = {
    customer: { info: initialCustomerInfo, billingaddress: initialAddress, mailingaddress: initialAddress },
    welllocation: initialWell,
    servicereport: initialServiceRecord,
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleSidebarClick = (view: string) => {
    setCurrentView(view);
    setIsBackWrapperOpen(true); // Open the BackWrapper when a new sidebar button is clicked
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'AddProject':
        return <AddProject />;
      case 'AddWell':
        return <AddWellLocation formState={formState} setFormState={setFormState} />;
      case 'AddCustomer':
        return <AddCustomer formState={formState} setFormState={setFormState} />;
      case 'WellActivity':
        return <WellActivity formState={formState} setFormState={setFormState} />;
      default:
        return null;
    }
  };

  return (
    <Paper
      style={{
        display: 'flex',
        width: '100%',
        height: '93.2vh',
        boxShadow: '4px -4px 8px rgba(0, 0, 0, 0.6)', // Shadow on the right and top sides
      }}
    >
      <Box style={{ width: isExpanded ? '15%' : '5%', height: '100%' }}>
        <ProjectSideBar isExpanded={isExpanded} setExpanded={setIsExpanded} setCurrentView={handleSidebarClick} />
      </Box>
      <Box style={{ width: isExpanded ? '85%' : '95%', height: '100%' }}>
        <Project />
        <BackWrapper open={isBackWrapperOpen} onBack={() => setIsBackWrapperOpen(false)}>
          {renderCurrentView()}
        </BackWrapper>
      </Box>
    </Paper>
  );
};

export default ProjectWithSideBar;