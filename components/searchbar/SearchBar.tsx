import React, { useState } from 'react';
import axios from 'axios';
import { SearchbarContainer, SearchbarInput, ButtonsContainer, StyledButton } from '../../styles/SearchBar.styles';
import { Paper } from '@mui/material'; // Import Paper from Material UI
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import { useEffect } from 'react';

interface SearchBarProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
  isExpanded: boolean; // Added the isExpanded prop
}

const SearchBar: React.FC<SearchBarProps> = ({ setCurrentView, isExpanded }) => { // Added isExpanded here
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchAddressAPI = async (query: string) => {
    const response = await axios.post('http://localhost:3000/searchAddress',
      { partialAddress: query }
    );
    console.log(response.data);
  };

  const searchNameAPI = async (query: string) => {
    const response = await axios.get('http://localhost:3000/searchName', {
      params: { name: query }
    });
    console.log(response.data);
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchQuery.trim()) {
        console.log('No search query entered.');
        return;
      }

      if (/[0-9]/.test(searchQuery.charAt(0))) {
        console.log('Searching for address:', searchQuery);
        await searchAddressAPI(searchQuery);
      } else {
        console.log('Searching for name:', searchQuery);
        await searchNameAPI(searchQuery);
      }
    };

    handleSearch();
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: '5px' }}> {/* Wrapping content inside Paper */}
      <SearchbarContainer isExpanded={isExpanded}>
        <SearchbarInput
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <ButtonsContainer>
          <StyledButton onClick={() => setCurrentView('addCustomer')}><ContactPhoneRoundedIcon /></StyledButton>
        </ButtonsContainer>
      </SearchbarContainer>
    </Paper>
  );
};

export default SearchBar;
