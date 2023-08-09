import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {console.log("Hello");
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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleEmailPasswordLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <div>
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
        <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default LoginPage;
