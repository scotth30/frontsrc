import React from 'react';
import { Dialog, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface BackWrapperProps {
  children: React.ReactNode;
  open: boolean; // Prop to control the modal's open state
  onBack: () => void; // Function to close the modal
  handleSubmit?: () => void; // Optional function for submit
}

const BackWrapper: React.FC<BackWrapperProps> = ({ children, open, onBack, handleSubmit }) => (
  <Dialog
    open={open}
    onClose={onBack}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    fullWidth
    maxWidth="md"
  >
    <div style={{ backgroundColor: 'white', padding: '20px', position: 'relative' }}>
      <IconButton
        onClick={onBack}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        <CloseIcon style={{ color: 'black' }} />
      </IconButton>
      {handleSubmit && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ position: 'absolute', top: '10px', right: '70px' }}
        >
          Submit
        </Button>
      )}
      {children}
    </div>
  </Dialog>
);

export default BackWrapper;
