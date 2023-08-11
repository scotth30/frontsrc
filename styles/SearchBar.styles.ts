import { styled } from '@mui/system';
import { Button, OutlinedInput } from '@mui/material';

export const SearchbarContainer = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    position: 'sticky',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: isExpanded ? 'calc(100% - 260px)' : 'calc(100% - 80px)', // Adjust the width based on sidebar
    padding: '10px',
    marginTop: '-30px',
    boxSizing: 'border-box',
    transition: 'width 0.3s ease-in-out', // Transition effect
  })
);

export const SearchbarInput = styled(OutlinedInput)({
  flex: '4', // Flex ratio 4:1
  margin: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black', // Sets the outline color to black
  },
  '& .MuiOutlinedInput-input::placeholder': {
    color: 'black', // Sets the placeholder text color to black
  },
});

export const ButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flex: '1', // Flex ratio 4:1
  gap: '10px',
  justifyContent: 'flex-end',
});

export const StyledButton = styled(Button)({
  background: '#007bff',
  height: '50px',
  color: '#ffffff',
  '&:hover': {
    background: '#0056b3',
  },
});
