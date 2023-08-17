import React from 'react';
import { Typography } from '@mui/material';
import { Address } from './ProjectInterface'; // Adjust the path as needed

interface AddressViewProps {
  address: Address | undefined; // Allow undefined address
}

export const AddressView: React.FC<AddressViewProps> = ({ address }) => {
  if (!address || !address.street || !address.city || !address.state || address.county === undefined || address.zip === undefined) {
    return <div>Address not available</div>; // Handle missing address info
  }

  return (
    <>
      <Typography variant="body1">{address.street}</Typography>
      <Typography variant="body2">{address.city}</Typography>
      <Typography variant="body2">{address.state}</Typography>
      <Typography variant="body2">{address.county}</Typography>
      <Typography variant="body2">{address.country}</Typography>
      <Typography variant="body2">{address.zip}</Typography>
    </>
  );
};
