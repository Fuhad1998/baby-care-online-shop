import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';






const Header = () => {
  const {user, logOut} = UseAuth();


    return (
      <Navbar expand={false}   >
      <Container fluid  >
      <Navbar.Brand href="#">Baby Care Shop</Navbar.Brand>
          <Link  className="header-link" to="/homes">Home</Link>
          

          {
            user?.email ? 
            <button 
            // style={{backgroundColor: '#e3f2fd'}}
            className="header-link border-0"
             onClick={logOut}>Log-Out</button>
            :
            <Link  className="header-link" to="/login">Log-In</Link>
          }
          
          
        
        

        <Navbar.Toggle aria-controls="offcanvasNavbar"  />
        <Navbar.Offcanvas
        style={{width: "300px"}}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id="offcanvasNavbarLabel">
              
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/allCloths">All Cloths</Link>
              <Link to="/allMilks">All Milks</Link>
              <Link to="">All Toys</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/myOrders">My Order</Link>
              <Link to="/manageAllOrders">Manage All Orders</Link>
              <Link to="/addAProduct">Add A Product</Link>
              <Link to="/makeAdmin">Make Admin</Link>

             
              
              
              
              
              
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
};

export default Header;