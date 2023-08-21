import React, { useEffect, useState } from 'react';
import { List, ListItemButton, ListItemText, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Customer {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  userid: string;
}

const ProjectCustomerOther: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/othercustomer');
        setCustomers(response.data);
      } catch (error) {
        console.error('An error occurred while fetching the customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleCustomerClick = (userId: string) => {
    navigate(`/customer/${userId}`);
  };

  return (
    <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px' }}>
      <Paper elevation={3} style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ overflow: 'auto', flex: 1, minHeight: '51vh' }}>
          <List>
            {customers.map((customer) => (
              <ListItemButton key={customer.userid} onClick={() => handleCustomerClick(customer.userid)}>
                <ListItemText primary={`${customer.firstname} ${customer.lastname}`} secondary={`${customer.email}, ${customer.phonenumber}`} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProjectCustomerOther;
