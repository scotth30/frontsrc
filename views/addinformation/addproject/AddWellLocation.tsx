import React from 'react';
import { FormState, Address } from '../addcustomer/interfaces';
import { TextField, Grid } from '@mui/material';

interface Props {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const AddWellLocation: React.FC<Props> = ({ formState, setFormState }) => {
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

  return (
    <Grid container spacing={2}>
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
    </Grid>
  );
};

export default AddWellLocation;
