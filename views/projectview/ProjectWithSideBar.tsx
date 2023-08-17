import React, { useState } from 'react';
import Project from './Project';
import ProjectSideBar from './ProjectSideBar';
import AddProject from '../addinformation/addproject/AddProject';
import AddWellLocation from '../addinformation/addproject/AddWellLocation';
import AddCustomer from '../addinformation/addcustomer/AddCustomer';
import WellActivity from '../addinformation/addproject/WellActivity';
import {
  FormState,
  initialCustomerInfo,
  initialAddress,
  initialWell,
  initialServiceRecord,
} from '../addinformation/addcustomer/interfaces';

const ProjectWithSideBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<string>('');

  const initialFormState: FormState = {
    customer: { info: initialCustomerInfo, billingaddress: initialAddress, mailingaddress: initialAddress },
    welllocation: initialWell,
    servicereport: initialServiceRecord,
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);

  const [formStateProject, setFormStateProject] = useState<FormState>({
    customer: {
      info: initialCustomerInfo,
      billingaddress: initialAddress,
      mailingaddress: initialAddress,
    },
    othercustomer: {
      info: initialCustomerInfo,
      billingaddress: initialAddress,
      mailingaddress: initialAddress,
    },
    welllocation: initialWell,
    servicereport: initialServiceRecord,
  });

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
        return <Project  />;
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <ProjectSideBar isExpanded={isExpanded} setExpanded={setIsExpanded} setCurrentView={setCurrentView} />
      <div style={{ width: isExpanded ? '85%' : '95%', height: '100%' }}>
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default ProjectWithSideBar;
