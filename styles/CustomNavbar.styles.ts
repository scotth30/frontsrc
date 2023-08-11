import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { IconButton, TextField } from '@mui/material';
export const CustomAppBar = styled(AppBar)`
  background-color: #0d6efd;
  position: sticky;
  box-shadow: none; // Remove box-shadow
`;

export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  position: sticky;
`;

export const NavBrand = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem; // Adjust the font size to fit on one line
  white-space: nowrap; // Prevents the text from wrapping to the next line
  color: #fff !important;
  text-decoration: none;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
`;

export const LogoutButton = styled('button')`
  color: white;
  background-color: #0d6efd;
  border: 2px solid white; // Sets the border to white
  margin: 0 5px;
  padding: 5px 10px; // You can adjust padding as needed
  cursor: pointer; // Changes the cursor to a hand pointer on hover
  transition: 0.3s; // Smooth transition for hover effects

  &:hover {
    background-color: #0056b3; // You can adjust the hover background color if needed
  }
`;


export const LoginButton = styled(Link)`
  color: white;
  background-color: #0d6efd;
  margin: 0 5px;
`;

export const SignupButton = styled(Link)`
  color: white;
  background-color: #0d6efd;
  margin: 0 5px;
`;

export const CustomInput = styled('input')`
  overflow: hidden !important;
`;



export const CustomSearchTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    color: white;
    border-color: white;

    .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }
  }
  .MuiInputBase-input {
    color: white;
  }
`;

export const CustomSearchIconButton = styled(IconButton)`
  color: white;
  /* Comment out or remove the following line if you want to remove the icon */
  display: block;

  /* Uncomment the following line if you want to remove the icon */
  /* display: none; */
`;