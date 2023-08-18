import React, { useState } from 'react';
import { CustomerInfo, Address, FormProps } from './interfaces';
import { Container, TextField, Typography, Grid } from '@mui/material';
import BackWrapper from '../../projectview/BackWrapper';
import Button from '@mui/material/Button';
const AddCustomer: React.FC<FormProps> = ({ formState, setFormState }) => {
  const [addingMailingAddress, setAddingMailingAddress] = useState(false);
  const [open, setOpen] = useState(true); // Define the open state

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

  const handleSubmit = () => {
    // Implement your submit logic here
    setOpen(false); // Close the BackWrapper
  };

  const handleBackAction = () => {
    // Implement the back action logic here
    setOpen(false); // Close the BackWrapper
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
        <Button
          variant="contained"
          onClick={() => setAddingMailingAddress(!addingMailingAddress)}
        >
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
      </Container>

  );
};

export default AddCustomer;
