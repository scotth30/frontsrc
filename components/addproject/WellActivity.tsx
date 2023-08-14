import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, TextField } from '@mui/material';
import { FormState, ServiceRecord } from '../addcustomer/interfaces';

interface Props {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const WellActivity: React.FC<Props> = ({ formState, setFormState }) => {
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
        report: e.target.value,
      },
    }));
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
