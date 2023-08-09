import React from 'react';
import { FormState,  Address } from '../addcustomer/interfaces';

interface Props {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const AddWellLocation: React.FC<Props> = ({ formState, setFormState }) => {
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Address) => {
    setFormState(prevState => ({
      ...prevState,
      welllocation: {
        ...prevState.welllocation,
        address: {
          ...prevState.welllocation.address,
          [field]: e.target.value
        }
      }
    }));
  };

  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      welllocation: {
        ...prevState.welllocation,
        latitude: e.target.value
      }
    }));
  };

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      welllocation: {
        ...prevState.welllocation,
        longitude: e.target.value
      }
    }));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Street"
        value={formState.welllocation.address.street}
        onChange={(e) => handleAddressChange(e, 'street')}
      />
      <input 
        type="text" 
        placeholder="City"
        value={formState.welllocation.address.city}
        onChange={(e) => handleAddressChange(e, 'city')}
      />
      <input 
        type="text" 
        placeholder="State"
        value={formState.welllocation.address.state}
        onChange={(e) => handleAddressChange(e, 'state')}
      />
      <input 
        type="text" 
        placeholder="Zip"
        value={formState.welllocation.address.zip}
        onChange={(e) => handleAddressChange(e, 'zip')}
      />
      <input 
        type="text" 
        placeholder="Country"
        value={formState.welllocation.address.country}
        onChange={(e) => handleAddressChange(e, 'country')}
      />
      <input 
        type="text" 
        placeholder="County"
        value={formState.welllocation.address.county}
        onChange={(e) => handleAddressChange(e, 'county')}
      />
      <input 
        type="text" 
        placeholder="Latitude"
        value={formState.welllocation.latitude}
        onChange={handleLatitudeChange}
      />
      <input 
        type="text" 
        placeholder="Longitude"
        value={formState.welllocation.longitude}
        onChange={handleLongitudeChange}
      />
    </div>
  );
};

export default AddWellLocation;
