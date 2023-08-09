import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, ButtonBase } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoIcon from '@mui/icons-material/Photo';
import ViewListIcon from '@mui/icons-material/ViewList';

const SideBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(prevExpanded => !prevExpanded);
  };

  return (
    <div className = 'sidebar'
      style={{ 
        width: isExpanded ? '220px' : '50px', 
        transition: 'width 0.3s ease', 
        position: 'relative', 
        borderRight: '1px solid #e0e0e0', 
        borderTop: '0px',
        marginTop: '60px',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        height: '100vh',  // Constrain the height
        backgroundColor: '#0d6efd',
        color: 'white',
        padding: '0px',
        overflow: 'hidden'  // Ensure no spillover
      }
    }
    >
      
      <IconButton 
        aria-label="toggle"
        onClick={handleToggle}
        style={{ position: 'absolute', top: '8px', right: '8px' }}
      >
        <ViewListIcon sx={{color: "#FFFDFA"}} />
      </IconButton>

      <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bottom: '9%'}}>
        {[
          {to: "/", icon: <HomeIcon sx={{color: "#FFFDFA"}}/>,  text: "Home"},
          {to: "/about", icon: <InfoIcon sx={{color: "#FFFDFA"}}/>, text: "About"},
          {to: "/picture", icon: <WhatshotIcon sx={{color: "#FFFDFA"}}/>, text: "Pictures"},
          {to: "/work", icon: <WorkIcon sx={{color: "#FFFDFA"}}/>, text: "Work"},
          {to: "/contacts", icon: <ContactsIcon sx={{color: "#FFFDFA"}}/>, text: "Contacts"},
          {to: "/account", icon: <AccountCircleIcon sx={{color: "#FFFDFA"}}/>, text: "Account"},
          {to: "/picture-generator", icon: <PhotoIcon sx={{color: "#FFFDFA"}}/>, text: "Picture Generator"}
        ].map((item, index) => (
          <ButtonBase component={Link} to={item.to} key={index} style={{ width: '100%', borderRadius: 0 }}>
            <ListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </ButtonBase>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
