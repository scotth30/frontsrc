import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { UserInfo } from './ProjectInterface'; // Adjust the path as needed

interface UserInfoViewProps {
  user: UserInfo; // Use the UserInfo interface from the ProjectInterface.ts file
}

const UsersView: React.FC<UserInfoViewProps> = ({ user }) => {
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="body1" textAlign="center">{`${user.firstName} ${user.lastName}`}</Typography> {/* Updated property names */}
      <Typography variant="body2" textAlign="center">{user.email}</Typography>
      <Typography variant="body2" textAlign="center">{user.phoneNumber}</Typography>
      <Typography variant="body2" textAlign="center">{user.userCreationDate ? user.userCreationDate.toLocaleString() : 'Unknown'}</Typography>
      <Typography variant="body2" textAlign="center">{user.userActive ? 'Active' : 'Inactive'}</Typography>
    </Box>
  );
};

export default UsersView;
