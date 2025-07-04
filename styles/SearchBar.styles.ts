import { styled } from '@mui/system';
import { Button, OutlinedInput } from '@mui/material';

export const SearchbarContainer = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    position: 'sticky',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box',
    transition: 'width 0.3s ease-in-out', // Transition effect
    height: '35px',
  })
);

export const SearchbarInput = styled(OutlinedInput)({
  flex: '4', // Flex ratio 4:1
  height: '35px',
  margin: '5px',
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
  justifyContent: 'flex-end',
  marginLeft: '20px',
});

export const StyledButton = styled(Button)({
  display: 'flex',
  background: '#009C00',
  height: '40px',
  color: '#ffffff',
  '&:hover': {
    background: '#0056b3',
  },
});
