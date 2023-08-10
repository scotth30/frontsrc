import { createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d6efd',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          backgroundColor: '#0d6efd', // You can also use theme.palette.primary.main if you want to reference the primary color
          color: '#fff',
          marginTop: '20px',
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
