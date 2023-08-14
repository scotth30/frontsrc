import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const ContainerStyle = styled('div')({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid white',
  borderRadius: '20px',
  padding: '1rem',
  width: '80%',
  backgroundColor: '#0d6efd',
  position: 'absolute', // Add position absolute
  top: '50%', // Position it 50% from the top
  left: '50%', // Position it 50% from the left
  transform: 'translate(-50%, -50%)', // Translate it back by 50% of its own width and height
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow to give the TextField an elevated appearance

});

export const FormFieldsContainerStyle = styled('div')({
  display: 'grid',
  marginTop: '2rem',
  gap: '4rem',
  marginBottom: '1rem',
  gridTemplateRows: 'repeat(3, auto)',
  gridTemplateColumns: 'repeat(12, 1fr)',

  // Define custom column spans for each row
  '& > :nth-of-type(n+1):nth-of-type(-n+3)': { gridColumnEnd: 'span 4' },
  '& > :nth-of-type(n+4):nth-of-type(-n+6)': { gridColumnEnd: 'span 4' },
  '& > :nth-of-type(n+7)': { gridColumnEnd: 'span 3', width: '100%' },

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(6, 1fr)',
    '& > :nth-of-type(n+1):nth-of-type(-n+3)': { gridColumnEnd: 'span 2' },
    '& > :nth-of-type(n+4):nth-of-type(-n+6)': { gridColumnEnd: 'span 2' },
    '& > :nth-of-type(n+7)': { gridColumnEnd: 'span 2' },
  },

  '@media (max-width: 480px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    '& > :nth-of-type(n+1):nth-of-type(-n+3)': { gridColumnEnd: 'span 1' },
    '& > :nth-of-type(n+4):nth-of-type(-n+6)': { gridColumnEnd: 'span 1' },
    '& > :nth-of-type(n+7)': { gridColumnEnd: 'span 1' },
  },
});




export const StyledTextField = styled(TextField)({
  width: '100%', // Ensures that the TextField fills the entire width of the grid cell
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', // Adds a subtle shadow to give the TextField an elevated appearance
});


export const FormFieldStyle = styled('div')({
  flexGrow: '1', // Make the field flex and fill the available space
  backgroundColor: 'white',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
});

export const ButtonContainerStyle = styled('div')({
  display: 'flex',
  marginTop: '4rem !important',
  justifyContent: 'center',
});
