import * as React from 'react';
import { Paper, Box, Typography, Divider } from '@mui/material';
import UsersView from './UserInfoView';
import { AddressView } from './AddressView';
import OtherCustomer from './OtherContact';
import { Users } from './UserInfoView';

const user: Users = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@example.com',
  phonenumber: '123-456-7890',
  useractive: true,
};

const TopBarView: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ padding: '5px', display: 'flex', justifyContent: 'space-between', width: '100%', height: '15vh' }}>
      <Box width="25%" height="100%" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <UsersView user={user} />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ bgcolor: 'grey', width: '2px' }} />
      <Box width="25%" height="100%" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">Mailing Address</Typography>
        <AddressView />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ bgcolor: 'grey', width: '2px' }} />
      <Box width="25%" height="100%" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">Billing Address</Typography>
        <AddressView />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ bgcolor: 'grey', width: '2px' }} />
      <Box width="25%" height="100%" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <OtherCustomer />
      </Box>
    </Paper>
  );
};

export default TopBarView;
