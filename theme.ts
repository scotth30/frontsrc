import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d6efd',
    },
    text: {
      primary: '#ffffff', // Sets the primary text color to white
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#fff', // Sets the text color to white for outlined inputs
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Sets the border color for outlined inputs
          },
          '& .MuiOutlinedInput-input': {
            color: '#fff', // Sets the text color to white for outlined inputs
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: '#fff', // Keeps the label color white when focused
          },
          '& .MuiPlaceholder-root': {
            color: 'black', // Sets the placeholder color to black
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff', // Sets the label color to white
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          color: 'black', // Sets the text color to black for the dropdown options
        },
      },
    },
    // Add other component overrides as needed
  },
});

// Define any specific custom styles outside of the theme here
const signUpButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#0d6efd',
  color: '#fff',
  marginTop: '20px',
};

export { theme, signUpButtonStyles };
