import React from 'react';
import { Paper, Grid } from '@mui/material';
import CustomerTabInfoWrapper from './CustomerTabInfoWrapper';
import ProjectCustomerOther from './ProjectCustomerOther';
import CustomerRelatedProject from './CustomerRelatedProject';
import { UserInfo, Address } from '../ProjectInterface'; // Adjust the path as needed

interface SelectedUserViewWrapperProps {
  userData: UserInfo;
  billingAddress: Address;
  mailingAddress: Address;
}

export const SelectedUserViewWrapper: React.FC<SelectedUserViewWrapperProps> = ({ userData, billingAddress, mailingAddress }) => {
  return (
    <Paper elevation={3} style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
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
