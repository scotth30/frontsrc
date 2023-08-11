import { styled } from '@mui/system';

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
});

export const FormFieldsContainerStyle = styled('div')({
  display: 'grid',
  marginTop: '2rem',
  gap: '4rem', // Gap between grid items
  marginBottom: '1rem', // Bottom margin for spacing
  gridTemplateRows: 'repeat(3, auto)', // 3 rows
  gridTemplateColumns: 'repeat(12, 1fr)', // Divide into 12 equal columns by default

  // Define custom column spans for each row
  '& > :nth-child(n+1):nth-child(-n+3)': { gridColumnEnd: 'span 4' }, // First 3 children span 4 columns each
  '& > :nth-child(n+4):nth-child(-n+6)': { gridColumnEnd: 'span 4' }, // Next 3 children span 4 columns each
  '& > :nth-child(n+7)': { gridColumnEnd: 'span 3', width: '100%' }, // Last 4 children span 3 columns each, with 130% width

  // Media query for smaller screens
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(6, 1fr)', // Divide into 6 equal columns for screens smaller than 768px
    '& > :nth-child(n+1):nth-child(-n+3)': { gridColumnEnd: 'span 2' },
    '& > :nth-child(n+4):nth-child(-n+6)': { gridColumnEnd: 'span 2' },
    '& > :nth-child(n+7)': { gridColumnEnd: 'span 2' },
  },

  // Media query for even smaller screens
  '@media (max-width: 480px)': {
    gridTemplateColumns: 'repeat(3, 1fr)', // Divide into 3 equal columns for screens smaller than 480px
    '& > :nth-child(n+1):nth-child(-n+3)': { gridColumnEnd: 'span 1' },
    '& > :nth-child(n+4):nth-child(-n+6)': { gridColumnEnd: 'span 1' },
    '& > :nth-child(n+7)': { gridColumnEnd: 'span 1' },
  },
});





export const FormFieldStyle = styled('div')({
  flexGrow: '1', // Make the field flex and fill the available space
});

export const ButtonContainerStyle = styled('div')({
  display: 'flex',
  marginTop: '4rem !important',
  justifyContent: 'center',
});
