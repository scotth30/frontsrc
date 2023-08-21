import React, { useState } from 'react';
import axios from 'axios';
import AddCustomer from '../addcustomer/AddCustomer';
import AddWellLocation from './AddWellLocation';
import WellActivity from './ServiceRecord';
import { FormState, initialCustomerInfo, initialAddress, initialWell, initialServiceRecord } from '../addcustomer/interfaces';
import { Container, Grid, Box } from '@mui/material';

const AddProject: React.FC = () => {

  const [formState, setFormState] = useState<FormState>({
    customer: { info: initialCustomerInfo, billingaddress: initialAddress, mailingaddress: initialAddress },
    othercustomer: { info: initialCustomerInfo, billingaddress: initialAddress, mailingaddress: initialAddress },
    welllocation: initialWell,
    servicereport: initialServiceRecord,
  });
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const [open, setOpen] = useState(true); // Maintain the state for the modal

  const handleSubmit = async () => {
    try {
      const response = await axios.post(backendURL +'/addProject', formState);
      console.log(response.data);
      setOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleBackAction = () => {
    setOpen(false); // Close the modal when the back button is clicked
  };

  return (
      <Container>
        <Box>
          <AddCustomer formState={formState} setFormState={setFormState} />
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <AddWellLocation formState={formState} setFormState={setFormState} />
            </Grid>
            <Grid item xs={3}>
              <WellActivity formState={formState} setFormState={setFormState} />
            </Grid>
          </Grid>
        </Box>
      </Container>
  );
};

export default AddProject;
