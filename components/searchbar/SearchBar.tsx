import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { SearchbarContainer, SearchbarInput, ButtonsContainer, StyledButton } from '../../styles/SearchBar.styles';

interface SearchBarProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
  isExpanded: boolean; // Added the isExpanded prop
}

const SearchBar: React.FC<SearchBarProps> = ({ setCurrentView, isExpanded }) => { // Added isExpanded here
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
      <SearchbarContainer isExpanded={isExpanded}>
        <SearchbarInput
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <ButtonsContainer>
          <StyledButton onClick={() => setCurrentView('addProject')}>Add Project</StyledButton>
          <StyledButton onClick={() => setCurrentView('addCustomer')}>Add Customer</StyledButton>
          <StyledButton onClick={() => setCurrentView('addEmployee')}>Add Employee</StyledButton>
        </ButtonsContainer>
      </SearchbarContainer>
    ) : null
  );
};

export default SearchBar;
