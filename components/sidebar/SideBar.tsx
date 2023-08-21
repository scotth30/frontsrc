import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItemText, ListItemButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Drawer, SidebarContainer, ToggleButton, SidebarList } from '../../styles/SideBar.styles';
import ListIcon from '@mui/icons-material/List';
import WorkIcon from '@mui/icons-material/Work';

interface SidebarProps {
  setIsExpanded?: (value: boolean) => void;
}

const SidebarComponent: React.FC<SidebarProps> = ({ setIsExpanded }) => {
  const [isExpanded, setIsExpandedLocal] = useState(true);

  const handleToggle = () => {
    setIsExpandedLocal(!isExpanded);
    setIsExpanded && setIsExpanded(!isExpanded);
  };

  return (
    <Drawer isExpanded={isExpanded}>
      <SidebarContainer>
        <ToggleButton aria-label="toggle" onClick={handleToggle}>
          <ViewListIcon />
        </ToggleButton>
        <SidebarList>
          <ListItemButton component={Link} to="Project" sx={{ width: '100%', textAlign: 'left' }}>
            <WorkIcon sx={{ marginRight: 5 }} />
            <ListItemText primary="Projects" />
          </ListItemButton>
          <ListItemButton component={Link} to="calculator" sx={{ width: '100%', textAlign: 'left' }}>
            <WorkIcon sx={{ marginRight: 5 }} />
            <ListItemText primary="Calculator" />
          </ListItemButton>
          <ListItemButton component={Link} to="customer" sx={{ width: '100%', textAlign: 'left' }}>
            <ListIcon sx={{ marginRight: 5 }} />
            <ListItemText primary="Customers" />
          </ListItemButton>
          {/* Add other navigation links as needed */}
        </SidebarList>
      </SidebarContainer>
    </Drawer>
  );
};

export default SidebarComponent;
