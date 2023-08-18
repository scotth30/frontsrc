import React, { useContext, useState } from 'react';
import axios from 'axios';
import AddProject from './AddProject';
import BackWrapper from '../../projectview/BackWrapper';
import { AuthContext } from '../../../context/AuthContext';

const AddProjectWrapper: React.FC = () => {
  const auth = useContext(AuthContext);
  const currentUser = auth ? auth.currentUser : null;

  const [open, setOpen] = useState(true);

  const handleSubmit = async () => {
    if (!currentUser) {
      console.error('User not logged in.');
      return;
    }

    try {
      // Logic to obtain form state from AddProject and submit to the backend
      // ...
      setOpen(false);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleBackAction = () => {
    setOpen(false);
  };

  return (
    <BackWrapper open={open} onBack={handleBackAction} handleSubmit={handleSubmit}>
      <AddProject />
    </BackWrapper>
  );
};

export default AddProjectWrapper;
