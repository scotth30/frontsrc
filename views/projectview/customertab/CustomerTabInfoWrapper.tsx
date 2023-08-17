import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import UserView from '../UserView';
import { AddressView } from '../AddressView';
import { UserInfo, Address } from '../ProjectInterface';
import { Box} from '@mui/material';
interface CustomerTabInfoWrapperProps {
  userData: UserInfo;
  billingAddress: Address;
  mailingAddress: Address;
}

const CustomerTabInfoWrapper: React.FC<CustomerTabInfoWrapperProps> = ({
  userData,
  billingAddress,
  mailingAddress,
}) => {
  return (
    <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px', }}>
      <Paper elevation={3} style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: '1', overflow: 'auto' , minHeight: '17vh'}}>
          <UserView user={userData} />
        </Box>
        <Divider />
        <Box sx={{ flex: '1', overflow: 'auto', minHeight: '17vh'}}>
          <Typography variant="h6" component="div">
            Billing Address
          </Typography>
          <AddressView address={billingAddress} />
        </Box>
        <Divider />
        <Box sx={{ flex: '1', overflow: 'auto', minHeight: '17vh' }}>
          <Typography variant="h6" component="div">
            Mailing Address
          </Typography>
          <AddressView address={mailingAddress} />
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomerTabInfoWrapper;
