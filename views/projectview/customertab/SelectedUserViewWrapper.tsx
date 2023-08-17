import React from 'react';
import { Paper, Grid } from '@mui/material';
import CustomerTabInfoWrapper from './CustomerTabInfoWrapper';
import ProjectCustomerOther from './ProjectCustomerOther';
import CustomerRelatedProject from './CustomerRelatedProject';
import { UserInfo, Address } from '../ProjectInterface'; // Adjust the path as needed
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface SelectedUserViewWrapperProps {
  userData: UserInfo;
  billingAddress: Address;
  mailingAddress: Address;
  onBack: () => void; // Add this line
}

export const SelectedUserViewWrapper: React.FC<SelectedUserViewWrapperProps> = ({
  userData,
  billingAddress,
  mailingAddress,
  onBack, // Destructure the onBack prop
}) => {

  const handleBackClick = () => {
    onBack(); // Call the provided onBack function
  };

  return (
    <Paper elevation={3} style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
      <IconButton onClick={handleBackClick} sx={{ maxHeight: '10vh', marginTop: '15%' }}>
        <ArrowBackIcon style={{ color: 'black', maxHeight: '10vh' }} />
      </IconButton>
      <Grid container spacing={3} style={{ height: '100%' }}>
        <Grid item xs={4} style={{ height: '100%' }}>
          <CustomerTabInfoWrapper userData={userData} billingAddress={billingAddress} mailingAddress={mailingAddress} />
        </Grid>
        <Grid item xs={4} style={{ height: '100%' }}>
          <ProjectCustomerOther />
        </Grid>
        <Grid item xs={4} style={{ height: '100%' }}>
          <CustomerRelatedProject />
        </Grid>
      </Grid>
    </Paper>
  );
};
