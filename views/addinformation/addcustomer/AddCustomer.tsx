import React, { useState } from 'react';
import { CustomerInfo, Address, FormProps } from './interfaces';
import { Container, TextField, Typography, Grid, Button } from '@mui/material';
import { getAuth } from 'firebase/auth'; // Updated import

const AddCustomer: React.FC<FormProps> = ({ formState, setFormState }) => {
  const [addingMailingAddress, setAddingMailingAddress] = useState(false);
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const auth = getAuth(); // Create an auth instance using 'getAuth'

  const handleChange = (field: keyof CustomerInfo, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        info: { ...prevState.customer.info, [field]: value },
      },
    }));
  };

  const handleAddressChange = (field: keyof Address, value: string, isMailing: boolean) => {
    const addressType = isMailing ? 'mailingaddress' : 'billingaddress';
    setFormState((prevState) => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        [addressType]: { ...prevState.customer[addressType], [field]: value },
      },
    }));
  };

  const handleSubmit = async () => {
    const user = auth.currentUser; // Access current user through 'auth'
    if (!user) return;

    user.getIdToken(true).then(async (idToken: string) => { // Specify type for 'idToken'
      try {
        const response = await fetch(backendURL + '/addcustomer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify(formState.customer),
        });

        const data = await response.json();

        if (response.ok) {
          const newToken = data.token;
          console.log('New token received:', newToken);
        } else {
          console.error('Error adding customer:', data.message);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    }).catch((error: Error) => { // Specify type for 'error'
      console.error('Error getting token:', error);
    });
  };

  return (
    <Container component="form">
      <Typography variant="h4">Customer Information</Typography>
      <Grid container spacing={3}>
        {Object.keys(formState.customer.info).map((field) => (
          <Grid item xs={12} sm={4} key={field}>
            <TextField
              label={field}
              value={formState.customer.info[field as keyof CustomerInfo] || ''}
              onChange={(e) => handleChange(field as keyof CustomerInfo, e.target.value)}
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4">Billing Address</Typography>
      <Grid container spacing={3}>
        {Object.keys(formState.customer.billingaddress).map((field) => (
          <Grid item xs={12} sm={4} key={field}>
            <TextField
              label={field}
              value={formState.customer.billingaddress[field as keyof Address] || ''}
              onChange={(e) => handleAddressChange(field as keyof Address, e.target.value, false)}
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={() => setAddingMailingAddress(!addingMailingAddress)}>
        {addingMailingAddress ? 'Remove Mailing Address' : 'Add Mailing Address'}
      </Button>
      {addingMailingAddress && (
        <div>
          <Typography variant="h4">Mailing Address</Typography>
          <Grid container spacing={3}>
            {Object.keys(formState.customer.mailingaddress).map((field) => (
              <Grid item xs={12} sm={4} key={field}>
                <TextField
                  label={field}
                  value={formState.customer.mailingaddress[field as keyof Address] || ''}
                  onChange={(e) => handleAddressChange(field as keyof Address, e.target.value, true)}
                  fullWidth
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default AddCustomer;
