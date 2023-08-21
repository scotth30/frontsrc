import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Introduction Section */}
        <Grid item xs={12}>
          <Typography variant="h1">Welcome to Hedman Software</Typography>
          <Typography variant="h5">
            Innovating the well software industry, providing modern solutions for your business.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/signup">
            Get Started
          </Button>
        </Grid>

        {/* What the Software Does */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}> {/* Change padding property here */}
            <Typography variant="h4">What Our Software Does</Typography>
            <Typography>
              Explain here the specific functionalities and offerings of your well software.
            </Typography>
          </Paper>
        </Grid>

        {/* How It Can Help Your Business */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}> {/* Change padding property here */}
            <Typography variant="h4">How It Can Help Your Business</Typography>
            <Typography>
              Outline the key benefits and ways your software supports and enhances business operations.
            </Typography>
          </Paper>
        </Grid>

        {/* Time and Money Saving */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}> {/* Change padding property here */}
            <Typography variant="h4">Save Time and Money</Typography>
            <Typography>
              Detail the efficiency and cost-effectiveness of your software, and how it translates to tangible savings for your clients.
            </Typography>
          </Paper>
        </Grid>

        {/* Various Details About the Product */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}> {/* Change padding property here */}
            <Typography variant="h4">Product Features</Typography>
            <Typography>
              Provide an in-depth look at the various features and unique aspects of your well software, painting a comprehensive picture of what clients can expect.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
