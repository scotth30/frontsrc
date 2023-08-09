import React, { useState, useContext } from 'react';
import axios from 'axios';
import AddCustomer from '../addcustomer/AddCustomer';
import AddWellLocation from './AddWellLocation';
import WellActivity from './WellActivity';
import { FormState } from '../addcustomer/interfaces';
import { AuthContext } from '../../context/AuthContext';

interface AddProjectProps {}

const AddProject: React.FC<AddProjectProps> = () => {
  const auth = useContext(AuthContext);
  const currentUser = auth ? auth.currentUser : null;

  const [formState, setFormState] = useState<FormState>({
    customer: {
      info: {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        customertype: '',
        companyname: '',
        maincontact: '',
      },
      billingaddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        county: '',
      },
      mailingaddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        county: '',
      },
    },
    othercustomer: {
      info: {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        customertype: '',
        companyname: '',
        maincontact: '',
      },
      billingaddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        county: '',
      },
      mailingaddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        county: '',
      },
    },
    welllocation: {
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        county: '',
      },
      latitude: '',
      longitude: '',
      county: '',
    },
    servicereport: {
      details: '',
      activitytype: '',
    },
  });

  const [showSecondCustomer, setShowSecondCustomer] = useState(false);

  const handleSubmit = async () => {
    if (!currentUser) {
      console.error("User not logged in.");
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
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <AddCustomer formState={formState} setFormState={setFormState} />
      {showSecondCustomer && (
        <AddCustomer formState={formState} setFormState={setFormState} />
      )}
      <button onClick={() => setShowSecondCustomer(!showSecondCustomer)}>
        {showSecondCustomer ? 'Remove Additional Customer' : 'Add Additional Customer'}
      </button>
      <AddWellLocation formState={formState} setFormState={setFormState} />
      <WellActivity formState={formState} setFormState={setFormState} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddProject;
