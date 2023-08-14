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
    MuiButtonBase: {
      styleOverrides: {
        root: {
          colorPrimary: '#fff', // Default text color for buttons
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            fill: '#0d6efd', // Set the SVG fill color to black
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: '#000', // Black color for default state
          // Base styles for the root element
        },
        switchBase: {
          // Base styles for the switch control
          '&.Mui-checked': {
            color: '#000', // Black color for checked state
          },
          '&.Mui-disabled': {
            color: '#aaa', // Gray color for disabled state
          },
        },
        thumb: {
          // Styles for the thumb element
          backgroundColor: '#000', // Black color for thumb
        },
        track: {
          // Styles for the track element
          backgroundColor: '#000', // Black color for track
          opacity: 0.5, // Reduced opacity for track
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff', // Background color
          borderRadius: '5px', // Rounded corners
          '& label': { // Targeting label elements within FormControl
            color: '#000', // Black color for labels
            fontWeight: 'bold', // Bold font weight for labels
          },
          '& input, & textarea, & select': { // Targeting input, textarea, and select elements
            borderColor: '#000', // Black border color
            color: '#000', // Black text color
          },
          '& button': { // Targeting all button elements within FormControl
            color: '#fff', // White text color
            backgroundColor: '#fff', // Black background color
            '&:hover': {
              backgroundColor: '#fff', // Dark gray color on hover
            },
          },
          '& .Mui-focused': { // Targeting focused state of any element within FormControl
            borderColor: '#000', // Black border color for focused state
          },
          '& .Mui-error': { // Targeting error state of any element within FormControl
            borderColor: '#000', // Red border color for error state
            color: '#000', // Red text color for error state
          },
          '& .Mui-disabled': { // Targeting disabled state of any element within FormControl
            color: '#000', // Gray color for disabled state
            cursor: 'not-allowed', // Not-allowed cursor for disabled state
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#000', // Black color for text
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000', // Default border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0d6efd', // Border color when hovered
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
          backgroundColor: '#fff',
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#fff', // White color for MUI icons
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
