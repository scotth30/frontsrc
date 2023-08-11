import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { AlternateEmail } from '@mui/icons-material';
import { LoginContainer, LoginForm, LoginInput, LoginButton, ErrorText, DividerSection, DividerLine, SocialIcon, SocialButtonsContainer, SocialButton } from '../../styles/LoginPage.styles';
import { Google, Facebook } from '@mui/icons-material'; // Importing social media icons

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      if (userCredential.user) {
        navigate('/dashboard');
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
        navigate('/dashboard');
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
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error during Facebook login:', (error as Error).message);
      setLoginError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <LoginContainer>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleEmailPasswordLogin}>
        <LoginInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <LoginInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <LoginButton type="submit">Login</LoginButton>

      {loginError && <ErrorText>{loginError}</ErrorText>}
      <DividerSection>
  <DividerLine />
  <SocialIcon>
    <AlternateEmail />
  </SocialIcon>
  <DividerLine />
</DividerSection>
      <SocialButtonsContainer>
        <SocialButton onClick={handleGoogleLogin}>
          <Google /> {/* Google icon */}
          Sign in with Google
        </SocialButton>
        <SocialButton onClick={handleFacebookLogin}>
          <Facebook /> {/* Facebook icon */}
          Sign in with Facebook
        </SocialButton>
      </SocialButtonsContainer>
      </LoginForm>

    </LoginContainer>

  );
};

export default LoginPage;