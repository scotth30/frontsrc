import * as React from 'react';
import { Typography } from '@mui/material';

interface Users {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  useractive: boolean;
  usercreationdate?: Date;
}

const UsersView: React.FC = () => {
  // Test data
  const usersData: Users = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    phonenumber: '123-456-7890',
    useractive: true,
    usercreationdate: new Date('2023-01-15T00:00:00'),
  };

  return (
    <>
      <Typography variant="body1">{`${usersData.firstname} ${usersData.lastname}`}</Typography>
      <Typography variant="body2">{usersData.email}</Typography>
      <Typography variant="body2">{usersData.phonenumber}</Typography>
      <Typography variant="body2">{usersData.usercreationdate ? usersData.usercreationdate.toLocaleString() : 'Unknown'}</Typography>
      <Typography variant="body2">{usersData.useractive ? 'Active' : 'Inactive'}</Typography>
    </>
  );
};

export default UsersView;
