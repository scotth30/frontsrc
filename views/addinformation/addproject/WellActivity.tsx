import React, { useState } from 'react'; // Import useState hook
import { Radio, RadioGroup, FormControlLabel, FormControl, TextField} from '@mui/material';
import { ServiceRecord, FormProps } from '../addcustomer/interfaces';


const WellActivity: React.FC<FormProps> = ({ formState, setFormState }) => {
  const [open, setOpen] = useState(true); // Define the open state

  const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ServiceRecord) => {
    setFormState((prevState) => ({
      ...prevState,
      servicereport: {
        ...prevState.servicereport,
        [field]: e.target.value,
      },
    }));
  };

  const handleServiceReportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      servicereport: {
        ...prevState.servicereport,
        details: e.target.value,
      },
    }));
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    setOpen(false); // Close the BackWrapper
  };

  const handleBackAction = () => {
    // Implement the back action logic here
    setOpen(false); // Close the BackWrapper
  };

  return (
      <FormControl component="fieldset">
        <RadioGroup
          name="wellActivity"
          value={formState.servicereport.activitytype}
          onChange={(e) => handleActivityChange(e, 'activitytype')}
        >
          <FormControlLabel value="service" control={<Radio />} label="Service" />
          <FormControlLabel value="installation" control={<Radio />} label="Installation" />
        </RadioGroup>
        <TextField
          label="Service Report"
          multiline
          rows={4}
          value={formState.servicereport.details}
          onChange={handleServiceReportChange}
          variant="outlined"
          fullWidth
        />
      </FormControl>
  );
};

export default WellActivity;
