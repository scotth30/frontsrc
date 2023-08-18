import React, { useState } from 'react';
import { Address, FormProps } from '../addcustomer/interfaces';
import { TextField, Grid, Button } from '@mui/material';
import { getAuth, getIdToken } from 'firebase/auth'; // Import for Firebase authentication

const AddWellLocation: React.FC<FormProps> = ({ formState, setFormState }) => {
  // Define the open state to manage the modal
  const [open, setOpen] = useState(true);

  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const auth = getAuth(); // Create an auth instance using 'getAuth'

  // Handle changes for address fields
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Address
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      welllocation: {
        ...prevState.welllocation,
        address: {
          ...prevState.welllocation.address,
          [field]: e.target.value,
        },
      },
    }));
  };

  // Handle changes for coordinates
  const handleCoordinateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: 'latitude' | 'longitude'
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      welllocation: {
        ...prevState.welllocation,
        [field]: e.target.value,
      },
    }));
  };

  // Handle submit action
  const handleSubmit = async () => {
    const user = auth.currentUser; // Access current user through 'auth'
    if (!user) return;

    user.getIdToken(true).then(async (idToken: string) => {
      try {
        const response = await fetch(backendURL + '/addwell', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify(formState.welllocation),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Well location added:', data);
        } else {
          console.error('Error adding well location:', data.message);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    }).catch((error: Error) => {
      console.error('Error getting token:', error);
    });

    setOpen(false); // Close the modal when submitted
  };

  // Handle back action
  const handleBackAction = () => {
    // Implement the back action logic here
    setOpen(false); // Close the modal when the back button is clicked
  };

  return (
    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Grid container item xs={8} spacing={2} style={{ margin: 'auto' }}>
        {['street', 'city', 'state', 'zip', 'country', 'county'].map((field) => (
          <Grid item xs={4} key={field}>
            <TextField
              fullWidth
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formState.welllocation.address[field as keyof Address]}
              onChange={(e) => handleAddressChange(e, field as keyof Address)}
            />
          </Grid>
        ))}
        {['Latitude', 'Longitude'].map((field) => (
          <Grid item xs={6} key={field}>
            <TextField
              fullWidth
              label={field}
              value={formState.welllocation[field.toLowerCase() as 'latitude' | 'longitude']}
              onChange={(e) => handleCoordinateChange(e, field.toLowerCase() as 'latitude' | 'longitude')}
            />
          </Grid>
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleBackAction}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddWellLocation;
