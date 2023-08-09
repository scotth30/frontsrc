import React from 'react';
import { FormState, ServiceRecord } from '../addcustomer/interfaces';

interface Props {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const WellActivity: React.FC<Props> = ({ formState, setFormState }) => {
  const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof ServiceRecord) => {
    setFormState(prevState => ({
      ...prevState,
      servicereport: {
        ...prevState.servicereport,
        [field]: e.target.value
      }
    }));
  };

  return (
    <div>
      <input 
        type="radio" 
        name="wellActivity" 
        value="service"
        checked={formState.servicereport.activitytype === 'service'}
        onChange={(e) => handleActivityChange(e, 'activitytype')}
      />
      <label>Service</label>
      <input 
        type="radio" 
        name="wellActivity" 
        value="installation"
        checked={formState.servicereport.activitytype === 'installation'}
        onChange={(e) => handleActivityChange(e, 'activitytype')}
      />
      <label>Installation</label>
    </div>
  );
};

export default WellActivity;
