import { styled } from '@mui/system';
import { Button, Input } from '@mui/material';

export const SearchbarContainer = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: isExpanded ? 'calc(100% - 260px)' : 'calc(100% - 80px)', // Adjust the width based on sidebar
    padding: '10px',
    boxSizing: 'border-box',
  })
);

export const SearchbarInput = styled(Input)({
  flex: '4', // Flex ratio 4:1
  margin: '10px',
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
