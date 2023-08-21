import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, TextField, Button } from '@mui/material';
import { ServiceRecord, FormProps } from '../addcustomer/interfaces';

const WellActivity: React.FC<FormProps> = ({ formState, setFormState }) => {
  const [open, setOpen] = useState(true); // Define the open state
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ServiceRecord) => {
    setFormState((prevState) => ({
      ...prevState,
      servicereport: {
        ...prevState.servicereport,
        [field]: e.target.value,
      },
    }));
  };

  const handleServiceReportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      servicereport: {
        ...prevState.servicereport,
        details: e.target.value,
      },
    }));
  };

  // Handle submit action
  const handleSubmit = async () => {
    try {
      const response = await fetch(backendURL + '/addservicereport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState.servicereport),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Service report added:', data);
      } else {
        console.error('Error adding service report:', data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }

    setOpen(false); // Close the BackWrapper
  };

  const handleBackAction = () => {
    setOpen(false); // Close the BackWrapper
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        name="wellActivity"
        value={formState.servicereport.activitytype}
        onChange={(e) => handleActivityChange(e, 'activitytype')}
      >
        <FormControlLabel value="service" control={<Radio />} label="Service" />
        <FormControlLabel value="installation" control={<Radio />} label="Installation" />
      </RadioGroup>
      <TextField
        label="Service Report"
        multiline
        rows={4}
        value={formState.servicereport.details}
        onChange={handleServiceReportChange}
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleBackAction}>
        Back
      </Button>
    </FormControl>
  );
};

export default WellActivity;
