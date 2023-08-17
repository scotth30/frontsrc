import * as React from 'react';
import { Box, Paper, List, ListItemButton, ListItemText } from '@mui/material';
import { SelectedUserViewWrapper } from './SelectedUserViewWrapper'; // Adjust the path as needed
import { UserInfo, Address } from '../ProjectInterface'; // Adjust the path as needed

const ProjectCustomerWrapper: React.FC = () => {
  const [selectedUser, setSelectedUser] = React.useState<UserInfo | null>(null);

  // Sample data for Users - you can replace with actual data
  const users: UserInfo[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      userActive: true,
      userCreationDate: '2023-08-12T10:00:00',
    },
    // Add more users as needed
  ];

  // Sample data for addresses - replace with actual data
  const billingAddress: Address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: 12345,
  };
  const mailingAddress: Address = {
    street: '456 Another St',
    city: 'Sometown',
    state: 'TX',
    zip: 67890,
  };

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '16px' }}>
      {selectedUser ? (
        <SelectedUserViewWrapper userData={selectedUser} billingAddress={billingAddress} mailingAddress={mailingAddress} />
      ) : (
        <Paper elevation={3} sx={{ padding: '5px', overflow: 'auto', flex: '1' }}>
          <List>
            {users.map((user, index) => (
              <ListItemButton
                key={index}
                onClick={() => setSelectedUser(user)}
                sx={{
                  padding: '4px',
                  marginBottom: '4px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <ListItemText primary={`${user.firstName} ${user.lastName}`} secondary={user.email} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default ProjectCustomerWrapper;