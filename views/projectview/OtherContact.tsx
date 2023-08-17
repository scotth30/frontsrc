import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import UsersView from './UserView';
import { Users } from './UserView'; // Adjust the path as needed

interface OtherCustomerProps {
  otherCustomers?: Array<Users>;
}

const OtherCustomer: React.FC<OtherCustomerProps> = ({ otherCustomers }) => {
  return (
    <div>
      <Typography variant="h6">Other Customers</Typography>
      <List>
        {otherCustomers && otherCustomers.length > 0 ? (
          otherCustomers.map((customer, index) => (
            <ListItem key={index}>
              <UsersView user={customer} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No other customers available." />
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton onClick={() => {/* Add logic to add another customer */}}>
            Add another customer
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default OtherCustomer;
