import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      {/* Add the link to the sign-up page */}
      <Link to="/signup">Go to Sign Up Page</Link>
      <br />
      {/* Add the link to the login page */}
      <Link to="/login">Go to Login Page</Link>
      <Link to="/picture">Go to picgen</Link>
    </div>
  );
};

export default HomePage;
