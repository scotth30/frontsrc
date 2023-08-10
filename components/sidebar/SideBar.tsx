import React, { useState } from 'react'; // Importing useState
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon as MuiListItemIcon, ListItemText, ButtonBase } from '@mui/material';
import { styled } from '@mui/system';
import ViewListIcon from '@mui/icons-material/ViewList';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoIcon from '@mui/icons-material/Photo';
import { Sidebar, SidebarContainer, ToggleButton, SidebarList } from '../../styles/SideBar.styles';

interface SidebarProps {
  setIsExpanded: (value: boolean) => void; // This matches the property being passed from Dashboard
}

const WhiteListItemIcon = styled(MuiListItemIcon)`
  color: white;
`;

const SidebarComponent: React.FC<SidebarProps> = ({ setIsExpanded }) => {
  const [isExpanded, setIsExpandedLocal] = useState(true); // Local state to handle sidebar expansion

  const handleToggle = () => {
    setIsExpandedLocal(!isExpanded);
    setIsExpanded(!isExpanded); // Notify the parent about the change
  };

  return (
    <Sidebar isExpanded={isExpanded}>
      <SidebarContainer>
        <ToggleButton aria-label="toggle" onClick={handleToggle}>
          <ViewListIcon />
        </ToggleButton>
        <SidebarList>
          {[
            { to: "/", icon: <HomeIcon />, text: "Home" },
            { to: "/about", icon: <InfoIcon />, text: "About" },
            { to: "/picture", icon: <WhatshotIcon />, text: "Pictures" },
            { to: "/work", icon: <WorkIcon />, text: "Work" },
            { to: "/contacts", icon: <ContactsIcon />, text: "Contacts" },
            { to: "/account", icon: <AccountCircleIcon />, text: "Account" },
            { to: "/picture-generator", icon: <PhotoIcon />, text: "Picture Generator" }
          ].map((item, index) => (
            <ButtonBase component={Link} to={item.to} key={index} sx={{ width: '100%', textAlign: 'left' }}>
              <ListItem>
                <WhiteListItemIcon>{item.icon}</WhiteListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </ButtonBase>
          ))}
        </SidebarList>
      </SidebarContainer>
    </Sidebar>
  );
};

export default SidebarComponent;
