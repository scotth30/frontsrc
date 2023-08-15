import * as React from 'react';
import { Box, Paper, List, ListItemButton, ListItemText } from '@mui/material';
import UsersView, { Users } from './UserInfoView';

const ProjectCustomerWrapper: React.FC = () => {
  const [selectedUser, setSelectedUser] = React.useState<Users | null>(null);

  // Sample data for Users - you can replace with actual data
  const users: Users[] = [
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      phonenumber: '123-456-7890',
      useractive: true,
      usercreationdate: new Date('2023-08-12T10:00:00'),
    },
    // Add more users as needed
  ];

  return (
    <Box>
      {selectedUser ? (
        <UsersView user={selectedUser} />
      ) : (
        <Paper elevation={3} style={{ padding: '5px', overflow: 'auto', height: '58vh' }}>
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
                <ListItemText primary={`${user.firstname} ${user.lastname}`} secondary={user.email} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default ProjectCustomerWrapper;
