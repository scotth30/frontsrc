import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopBarView from '../../views/projectview/TopBarView';
import SearchBar from '../../components/searchbar/SearchBar';
import ClientView from '../../views/client/ClientView';

const ClientViewWrapper: React.FC = () => {
    const [currentView, setCurrentView] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
    return (
        <Box display="flex" flexDirection="column" height="100%" width="100%" className="dashboard-main">
            <Box height="15%" width="100%">
                <TopBarView />
            </Box>
            <Box height="3%" width="100%" padding="8px 0">
                {/* Pass the props to SearchBar */}
                <SearchBar setCurrentView={setCurrentView} isExpanded={isExpanded} />
            </Box>
            <Box flexGrow={1} width="100%">
                <ClientView />
            </Box>
        </Box>
    );
};

export default ClientViewWrapper;
