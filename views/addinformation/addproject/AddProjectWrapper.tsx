import React, { useState } from 'react';

import AddProject from './AddProject';
import BackWrapper from '../../projectview/BackWrapper';

const AddProjectWrapper: React.FC = () => {

  const [open, setOpen] = useState(true);

  const handleSubmit = async () => {
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
