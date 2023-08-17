import React, { useState, useContext } from 'react';
import axios from 'axios';
import AddCustomer from '../addcustomer/AddCustomer';
import AddWellLocation from './AddWellLocation';
import WellActivity from './WellActivity';
import {
  FormState,
  initialCustomerInfo,
  initialAddress,
  initialWell,
  initialServiceRecord,
} from '../addcustomer/interfaces';
import { AuthContext } from '../../../context/AuthContext';
import { Container, Button } from '@mui/material';

const AddProject: React.FC = () => {
  const auth = useContext(AuthContext);
  const currentUser = auth ? auth.currentUser : null;

  const [formState, setFormState] = useState<FormState>({
    customer: {
      info: initialCustomerInfo,
      billingaddress: initialAddress,
      mailingaddress: initialAddress,
    },
    othercustomer: {
      info: initialCustomerInfo,
      billingaddress: initialAddress,
      mailingaddress: initialAddress,
    },
    welllocation: initialWell,
    servicereport: initialServiceRecord,
  });

  const [showSecondCustomer, setShowSecondCustomer] = useState(false);

  const handleSubmit = async () => {
    if (!currentUser) {
      console.error('User not logged in.');
      return;
    }

    try {
      const idToken = await currentUser.getIdToken();
      const response = await axios.post(
        'http://localhost:3000/addProject',
        formState,
        { headers: { Authorization: `Bearer ${idToken}` } }
      );

      console.log(response.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <Container>
      <AddCustomer formState={formState} setFormState={setFormState} />
      {showSecondCustomer && (
        <AddCustomer formState={formState} setFormState={setFormState} />
      )}
      <Button onClick={() => setShowSecondCustomer(!showSecondCustomer)}>
        {showSecondCustomer ? 'Remove Additional Customer' : 'Add Additional Customer'}
      </Button>
      <AddWellLocation formState={formState} setFormState={setFormState} />
      <WellActivity formState={formState} setFormState={setFormState} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default AddProject;
