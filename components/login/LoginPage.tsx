import React, { useState, FormEvent } from 'react';
import { Google, Facebook, AlternateEmail } from '@mui/icons-material';
import { Container, Typography, Divider, IconButton, Paper } from '@mui/material';
import { ErrorText, StyledButton, StyledTextField } from '../../styles/LoginPage.styles';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/dashboard'); // Redirect to dashboard upon successful login
  };

  const handleEmailPasswordLogin = async (e: FormEvent) => {
    e.preventDefault();
    // Add your own logic here for email/password login
  };

  const handleGoogleLogin = async () => {
    // Add your own logic here for Google login
  };

  const handleFacebookLogin = async () => {
    // Add your own logic here for Facebook login
  };

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <Paper elevation={3} sx={{ width: '50%', height: '60%', padding: '20px', overflow: 'auto', backgroundColor: '#0d6efd' }}>
        <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Login Page</Typography>
        <form onSubmit={handleEmailPasswordLogin}>
          <StyledTextField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth sx={{ marginBottom: '20px' }} />
          <StyledTextField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
          <StyledButton type="submit" fullWidth sx={{ marginTop: '20px' }}>Login</StyledButton>
          {loginError && <ErrorText>{loginError}</ErrorText>}
          <Divider sx={{ my: 2 }}>
            <IconButton>
              <AlternateEmail />
            </IconButton>
          </Divider>
          <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <StyledButton
              variant="outlined"
              color="primary"
              startIcon={<Google />}
              onClick={handleGoogleLogin}
              sx={{ my: 1, width: '50%', marginRight: '15px', height: '60px' }}
            >
              Sign in with Google
            </StyledButton>
            <StyledButton
              variant="outlined"
              color="primary"
              startIcon={<Facebook />}
              onClick={handleFacebookLogin}
              sx={{ my: 1, width: '50%', marginLeft: '15px', height: '60px' }}
            >
              Sign in with Facebook
            </StyledButton>
          </Container>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
