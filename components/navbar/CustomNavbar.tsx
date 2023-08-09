import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import '../../css/Navbar.css';
import { getAuth, signOut } from "firebase/auth";

const CustomNavbar: React.FC = () => {
  const context = useContext(AuthContext);
  const auth = getAuth();

  const currentUser = context ? context.currentUser : null;

  const logout = () => {
    signOut(auth).catch((error) => {
      // An error happened.
      console.error("Failed to logout:", error);
    });
  }

  return (
    <Navbar bg="primary" expand="lg" style={{ color: 'white'}}>
      {/* Brand name */}
      <Navbar.Brand as={Link} to="/">
        Brand Name
      </Navbar.Brand>

      {/* Navbar toggler button for small screens */}
      <Navbar.Toggle aria-controls="navbarNav" />

      {/* Navbar menu */}
      <Navbar.Collapse id="navbarNav" >
        <Nav className="mx-auto" > {/* "mx-auto" class will center the items */}
          <Nav.Link as={Link} to="/" style={{ color: 'white' , overflow: 'hidden'}}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
            About
          </Nav.Link>
          {/* Dropdown Menu */}
          <NavDropdown title="Features" id="navbarDropdown" style={{ color: 'white' }}>
            <NavDropdown.Item as={Link} to="/features/feature1" className="black-text">
              Feature 1
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/features/feature2" className="black-text">
              Feature 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/features/feature3" className="black-text">
              Feature 3
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/pricing" style={{ color: 'white' , overflow: 'hidden'}}>
            Pricing
          </Nav.Link>
          <Nav.Link as={Link} to="/resources" style={{ color: 'white' , overflow: 'hidden'}}>
            Resources
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ color: 'white', overflow: 'hidden' }}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* Buttons in the center */}
      <div className="d-flex justify-content-center" >
        {currentUser ? (
          <>
          
            {/* Render the SearchBar component when logged in */}
            
            <input type="text" placeholder="Search" className="form-control mx-2" />
            <button className="btn btn-secondary mx-2"  onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Render the Login and Signup links when not logged in */}
            <Link className="btn btn-secondary mx-2" to="/login" style={{ color: 'white'}}>
              Login
            </Link>
            <Link className="btn btn-secondary mx-2" to="/signup" style={{ color: 'white'}}>
              Signup
            </Link>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
