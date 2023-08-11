import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon as MuiListItemIcon, ListItemText, ButtonBase } from '@mui/material';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import PhotoIcon from '@mui/icons-material/Photo';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Sidebar, SidebarContainer, ToggleButton, SidebarList } from '../../styles/SideBar.styles';
import ListIcon from '@mui/icons-material/List'; // You can choose a different icon

interface SidebarProps {
  setIsExpanded?: (value: boolean) => void;
}

const WhiteListItemIcon = styled(MuiListItemIcon)`
  color: white;
`;

const SidebarComponent: React.FC<SidebarProps> = ({ setIsExpanded }) => {
  const [isExpanded, setIsExpandedLocal] = useState(true);

  const handleToggle = () => {
    setIsExpandedLocal(!isExpanded);
    setIsExpanded && setIsExpanded(!isExpanded);
  };

  return (
    <Sidebar isExpanded={isExpanded}>
      <SidebarContainer>
        <ToggleButton aria-label="toggle" onClick={handleToggle}>
          <ViewListIcon />
        </ToggleButton>
        <SidebarList>
          <ButtonBase component={Link} to="addProject" sx={{ width: '100%', textAlign: 'left' }}>
            <ListItem>
              <WhiteListItemIcon><HomeIcon /></WhiteListItemIcon>
              <ListItemText primary="Add Project" />
            </ListItem>
          </ButtonBase>
          <ButtonBase component={Link} to="generatePicture" sx={{ width: '100%', textAlign: 'left' }}>
            <ListItem>
              <WhiteListItemIcon><PhotoIcon /></WhiteListItemIcon>
              <ListItemText primary="Picture Generator" />
            </ListItem>
          </ButtonBase>
          {/* Below are the additional links assumed to be in folders with similar names */}
          <ButtonBase component={Link} to="anotherFolder" sx={{ width: '100%', textAlign: 'left' }}>
            <ListItem>
              <WhiteListItemIcon><PhotoIcon /></WhiteListItemIcon> {/* Replace with the appropriate icon */}
              <ListItemText primary="Another Folder" />
            </ListItem>
          </ButtonBase>
          <ButtonBase component={Link} to="clientView" sx={{ width: '100%', textAlign: 'left' }}>
  <ListItem>
    <WhiteListItemIcon><ListIcon /></WhiteListItemIcon> {/* Replace with your preferred icon */}
    <ListItemText primary="Client View" />
  </ListItem>
</ButtonBase>
          {/* Add other navigation links as needed */}
        </SidebarList>
      </SidebarContainer>
    </Sidebar>
  );
};

export default SidebarComponent;
