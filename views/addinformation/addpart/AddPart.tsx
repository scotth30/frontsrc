import React, { useState } from 'react';

interface AddPartProps {
  onSubmit: (formData: any) => void;
}



const AddPart: React.FC<AddPartProps> = ({ onSubmit }) => {
  const [partName, setPartName] = useState<string>('');
  const [partCost, setPartCost] = useState<number>(0);
  const [partSupplier, setPartSupplier] = useState<string>('');
  const [partDocumentation, setPartDocumentation] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      partName,
      partCost,
      partSupplier,
      partDocumentation
    });
  };

  return (
    <div className="add-part-container">
      <h1>Add a New Part</h1>
      <form onSubmit={handleSubmit} className="add-part-form">
        <label htmlFor="partName">Part Name</label>
        <input 
          id="partName"
          type="text"
          value={partName}
          onChange={(e) => setPartName(e.target.value)}
          required
        />

<label htmlFor="partCost">Part Cost</label>
        <input 
          id="partCost"
          type="number"
          value={partCost}
          onChange={(e) => setPartCost(Number(e.target.value))}
          required
        />
        

        <label htmlFor="partSupplier">Part Supplier</label>
        <input 
          id="partSupplier"
          type="text"
          value={partSupplier}
          onChange={(e) => setPartSupplier(e.target.value)}
          required
        />

        <label htmlFor="partDocumentation">Part Documentation</label>
        <input 
          id="partDocumentation"
          type="text"
          value={partDocumentation}
          onChange={(e) => setPartDocumentation(e.target.value)}
          required
        />

        <button type="submit">Add Part</button>
      </form>
    </div>
  );
};

export default AddPart;
