import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d6efd',
    },
    text: {
      primary: '#fff',
      secondary: '#000', // Black color for other text areas
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d6efd', // Default background color for buttons
          color: '#fff', // Default text color for buttons
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#000', // Black color for text
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '& .MuiOutlinedInput-input': {
            color: '#000', // Black color for input text
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: '#000', // Black color for label when focused
          },
          '& .MuiPlaceholder-root': {
            color: '#000', // Black color for placeholders
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000', // Black color for labels
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          color: '#000', // Black color for dropdown options
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: '#000', // Black color for table pagination text
        },
      },
    },

    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: '#000', // Black color for table sort labels
          '&.Mui-active': {
            color: '#000', // Black color for active sort labels (clicked)
          },
          '& .MuiButtonBase-root': {
            color: '#000', // Black color for button base within sort labels
          },
          '& .MuiSvgIcon-root': {
            fill: '#000', // Black color for icon within sort labels
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          color: '#000',
          border: '1px solid #fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: '#000', // Black color for table headers
          backgroundColor: '#fff',
        },
        body: {
          color: '#000', // Black color for table body text
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'fff',
          color: '#000',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d6efd',
          color: '#000',
        },
      },
    },
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
