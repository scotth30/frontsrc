import * as React from 'react';
import { Typography } from '@mui/material';

export interface Users {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  useractive: boolean;
  usercreationdate?: Date;
}

interface UserInfoViewProps {
  user: Users;
}

const UsersView: React.FC<UserInfoViewProps> = ({ user }) => {
  return (
    <>
      <Typography variant="body1">{`${user.firstname} ${user.lastname}`}</Typography>
      <Typography variant="body2">{user.email}</Typography>
      <Typography variant="body2">{user.phonenumber}</Typography>
      <Typography variant="body2">{user.usercreationdate ? user.usercreationdate.toLocaleString() : 'Unknown'}</Typography>
      <Typography variant="body2">{user.useractive ? 'Active' : 'Inactive'}</Typography>
    </>
  );
};

export default UsersView;
