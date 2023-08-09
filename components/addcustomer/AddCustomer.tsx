import React, { useState } from 'react';
import { FormState, CustomerInfo, Address } from './interfaces';

interface AddCustomerProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const AddCustomer: React.FC<AddCustomerProps> = ({ formState, setFormState }) => {
  const [addingMailingAddress, setAddingMailingAddress] = useState(false);

  const handleChange = (field: keyof CustomerInfo, value: string) => {
    setFormState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        info: { ...prevState.customer.info, [field]: value }
      }
    }));
  };

  const handleAddressChange = (field: keyof Address, value: string, isMailing: boolean) => {
    const addressType = isMailing ? 'mailingaddress' : 'billingaddress';
    setFormState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        [addressType]: { ...prevState.customer[addressType], [field]: value }
      }
    }));
  };

  return (
    <form>
      <div>
        <h4>Customer Information</h4>
        {Object.keys(formState.customer.info).map(field => (
          <label key={field}>
            {field}:
            <input
              type="text"
              name={field}
              value={formState.customer.info[field as keyof CustomerInfo] || ''}
              onChange={e => handleChange(field as keyof CustomerInfo, e.target.value)}
            />
          </label>
        ))}
      </div>
      <div>
        <h4>Billing Address</h4>
        {Object.keys(formState.customer.billingaddress).map(field => (
          <label key={field}>
            {field}:
            <input
              type="text"
              name={field}
              value={formState.customer.billingaddress[field as keyof Address] || ''}
              onChange={e => handleAddressChange(field as keyof Address, e.target.value, false)}
            />
          </label>
        ))}
      </div>
      <button type="button" onClick={() => setAddingMailingAddress(!addingMailingAddress)}>
        {addingMailingAddress ? 'Remove Mailing Address' : 'Add Mailing Address'}
      </button>
      {addingMailingAddress && (
        <div>
          <h4>Mailing Address</h4>
          {Object.keys(formState.customer.mailingaddress).map(field => (
            <label key={field}>
              {field}:
              <input
                type="text"
                name={field}
                value={formState.customer.mailingaddress[field as keyof Address] || ''}
                onChange={e => handleAddressChange(field as keyof Address, e.target.value, true)}
              />
            </label>
          ))}
        </div>
      )}
    </form>
  );
};

export default AddCustomer;
