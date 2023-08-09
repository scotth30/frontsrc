import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './HomePage';
import SignUpPage from './components/signup/SignUpPage';
import LoginPage from './components/login/LoginPage';
import CustomNavbar from './components/navbar/CustomNavbar';
import Dashboard from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebaseConfig';
import PictureGenerator from './components/picture/PictureGenerator';
import firebase from 'firebase/auth';

const theme = createTheme();

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: firebase.User | null) => {
      if (user) {
        navigate('/dashboard');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        {/* Always render the Navbar */}
        <CustomNavbar />

        {/* Container for the rest of the content */}
        <div className="content-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/generatePicture" element={<PictureGenerator />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;