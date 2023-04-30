import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogout =()=>{
    logOut()
    .then()
    .catch(error=>console.log(error.message))
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link className="text-decoration-none text-black"  to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>

            {user && <Nav.Link href="#deets">
              <FaUserCircle style={{fontSize:"2rem"}}/>
            </Nav.Link>
            }

            
            
            {user ?<Button onClick={handleLogout} variant="dark">LogOut</Button>:

            <Link to='/login'><Button variant="dark">Login</Button></Link>
          }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default NavBar;