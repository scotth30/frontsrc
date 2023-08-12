import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import HomePage from './HomePage';
import SignUpPage from './components/signup/SignUpPage';
import LoginPage from './components/login/LoginPage';
import CustomNavbar from './components/navbar/CustomNavbar';
import Dashboard from './views/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import PictureGenerator from './components/picture/PictureGenerator';
import { theme }from './theme';



const App: React.FC = () => {
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
