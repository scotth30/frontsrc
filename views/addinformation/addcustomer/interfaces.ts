export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  county: string;
}

export interface CustomerInfo {
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  customertype: string;
  companyname: string;
  maincontact: string;
}

export interface Customer {
  info: CustomerInfo;
  billingaddress: Address;
  mailingaddress: Address;
}

export interface Well {
  address: Address;
  latitude: string;
  longitude: string;
  county: string;
}

export interface ServiceRecord {
  details: string;
  activitytype: string;
}

export interface FormState {
  customer: Customer;
  othercustomer?: Customer;
  welllocation: Well;
  servicereport: ServiceRecord;
}


export interface FormProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  
}

export const initialCustomerInfo: CustomerInfo = {
  firstname: '',
  lastname: '',
  phonenumber: '',
  email: '',
  customertype: '',
  companyname: '',
  maincontact: '',
};

export const initialAddress: Address = {
  street: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  county: '',
};

export const initialWell: Well = {
  address: initialAddress,
  latitude: '',
  longitude: '',
  county: '',
};

export const initialServiceRecord: ServiceRecord = {
  details: '',
  activitytype: '',
};

