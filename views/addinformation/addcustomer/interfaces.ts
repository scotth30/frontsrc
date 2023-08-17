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
