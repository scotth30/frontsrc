import React, { useState, useEffect, useContext } from 'react';
import '../../css/SearchBar.css'; 
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

interface SearchBarProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setCurrentView }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const auth = useContext(AuthContext);
  const currentUser = auth ? auth.currentUser : null;

  const searchAddressAPI = async (query: string, authToken: string) => {
    const response = await axios.post('http://localhost:3000/searchAddress', 
      { partialAddress: query },
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
    console.log(response.data);
  };

  const searchNameAPI = async (query: string, authToken: string) => {
    const response = await axios.get('http://localhost:3000/searchName', {
      params: { name: query },
      headers: { Authorization: `Bearer ${authToken}` }
    });
    console.log(response.data);
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchQuery.trim() || !currentUser) {
        console.log('No search query entered or user not logged in.');
        return;
      }

      const idToken = await currentUser.getIdToken(); 
      
      if (/[0-9]/.test(searchQuery.charAt(0))) {
        console.log('Searching for address:', searchQuery);
        await searchAddressAPI(searchQuery, idToken);
      } else {
        console.log('Searching for name:', searchQuery);
        await searchNameAPI(searchQuery, idToken);
      }
    };

    handleSearch();
  }, [searchQuery, currentUser]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    currentUser ? (
      <div className="searchbar-container" style={{ marginTop: '60px', display: 'fixed'}} >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="searchbar-input"
        />
        <div className="buttons-container">
          <button onClick={() => setCurrentView('addProject')}>Add Project</button>
          <button onClick={() => setCurrentView('addCustomer')}>Add Customer</button>
          <button onClick={() => setCurrentView('addEmployee')}>Add Employee</button>
          <button onClick={() => setCurrentView('addPart')}>Add Part</button>
          <button onClick={() => setCurrentView('addServiceRecord')}>Add Service Record</button>
        </div>
      </div>
    ) : null
  );
};
export default SearchBar;
