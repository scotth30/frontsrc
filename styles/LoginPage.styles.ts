import { styled } from '@mui/system';
import { Button, TextField } from '@mui/material';
export const ErrorText = styled('p')`
  color: red;
`;

export const StyledButton = styled(Button)`
  border-color: #fff; // White border color for buttons
  border-width: 1px; // Thickness of the border
  border-style: solid; // Style of the border
  box-shadow: 0 4px 6px rgba(0, 0, 0, .4); // Box shadow to elevate the button
  &:hover, &:active {
    border-color: #fff; // White border color for buttons on hover or click
    background-color: #6c757d; // Secondary color for button background on hover or click
  }
`;

export const StyledTextField = styled(TextField)`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px !important; // Additional spacing between text fields
`;