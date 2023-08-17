import React, { useState } from 'react';

interface AddServiceRecordProps {
  onSubmit: (data: any) => void;
}

const AddServiceRecord: React.FC<AddServiceRecordProps> = ({ onSubmit }) => {
  const [employeeId, setEmployeeId] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ employeeId, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="employeeId">Employee ID</label>
      <input 
        id="employeeId"
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Add Service Record</button>
    </form>
  );
};

export default AddServiceRecord;
