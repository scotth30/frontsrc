import React, { useState, FormEvent } from 'react';
import axios from 'axios';

interface AddEmployeeProps {
  onSubmit: (data: EmployeeData) => void;
}

interface EmployeeData {
  jobTitle: string;
  supervisorId: string;
  pay: number;
  phoneNumber: string;
  addressId: string;
  serviceReportId: string;
}

const AddEmployee: React.FC<AddEmployeeProps> = ({ onSubmit }) => {
  const [jobTitle, setJobTitle] = useState<string>('');
  const [supervisorId, setSupervisorId] = useState<string>('');
  const [pay, setPay] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [addressId, setAddressId] = useState<string>('');
  const [serviceReportId, setServiceReportId] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ jobTitle, supervisorId, pay, phoneNumber, addressId, serviceReportId });

    try {
      const response = await axios.post('/addEmployee', {
        jobTitle,
        supervisorId,
        pay,
        phoneNumber,
        addressId,
        serviceReportId,
      });

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Supervisor ID:
        <input
          type="text"
          value={supervisorId}
          onChange={(e) => setSupervisorId(e.target.value)}
        />
      </label>
      <label>
        Pay:
        <input
          type="number"
          value={pay}
          onChange={(e) => setPay(Number(e.target.value))}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Address ID:
        <input
          type="text"
          value={addressId}
          onChange={(e) => setAddressId(e.target.value)}
        />
      </label>
      <label>
        Service Report ID:
        <input
          type="text"
          value={serviceReportId}
          onChange={(e) => setServiceReportId(e.target.value)}
        />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
