import * as React from 'react';
import { Paper, Box } from '@mui/material';
import UsersView from './UserInfoView'; // Make sure the import is correct
import { AddressView } from './AddressView';

const TopBarView: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ padding: '15px', display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%' }}>
      <Box width="45%" height="100%">
        <UsersView />
      </Box>
      <Box width="45%" height="100%">
        <AddressView />
      </Box>
    </Paper>
  );
};

export default TopBarView;
