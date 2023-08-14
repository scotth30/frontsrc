import React, { useState, FormEvent } from 'react';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
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
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        handleLoginSuccess();
      }
    } catch (error) {
      console.error('Error during custom email/password login:', (error as Error).message);
      setLoginError('An error occurred during login. Please try again later.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      if (userCredential.user) {
        handleLoginSuccess();
      }
    } catch (error) {
      console.error('Error during Google login:', (error as Error).message);
      setLoginError('An error occurred during login. Please try again later.');
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      if (userCredential.user) {
        handleLoginSuccess();
      }
    } catch (error) {
      console.error('Error during Facebook login:', (error as Error).message);
      setLoginError('An error occurred during login. Please try again later.');
    }
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
