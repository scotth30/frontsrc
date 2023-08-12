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

const AddressView: React.FC = () => {
  // Test data
  const addressData: Address = {
    street: '123 Main St',
    city: 'Springfield',
    state: 'Illinois',
    zip: 62701,
  };

  const renderCell = (value: number | string | null | undefined) => {
    return value !== undefined && value !== null ? value : <Typography variant="body2" color="textSecondary">Unknown</Typography>;
  };

  return (
    <>
      <Typography variant="body1">{renderCell(addressData.street)}</Typography>
      <Typography variant="body2">{renderCell(addressData.city)}</Typography>
      <Typography variant="body2">{renderCell(addressData.state)}</Typography>
      <Typography variant="body2">{renderCell(addressData.county)}</Typography>
      <Typography variant="body2">{renderCell(addressData.country)}</Typography>
      <Typography variant="body2">{renderCell(addressData.zip)}</Typography>
    </>
  );
};

export default AddressView;
