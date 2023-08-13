import * as React from 'react';
import { Typography } from '@mui/material';

interface Address {
  street: string;
  city: string;
  state: string;
  county?: number | null;
  country?: number | null;
  zip: number;
}

export const AddressView: React.FC = () => {
  // Test data
  const addressData: Address = {
    street: '123 Main St',
    city: 'Springfield',
    state: 'Illinois',
    zip: 62701,
  };



  return (
    <>
    <Typography variant="body1">{addressData.street}</Typography>
    <Typography variant="body2">{addressData.city}</Typography>
    <Typography variant="body2">{addressData.state}</Typography>
    <Typography variant="body2">{addressData.county}</Typography>
    <Typography variant="body2">{addressData.country}</Typography>
    <Typography variant="body2">{addressData.zip}</Typography>
  </>
  );
};

