import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import "./Header.css"






const Header = () => {
  const {user, logOut} = UseAuth();


    return (
      <Navbar expand={false} className="bg-white Regular shadow py-3"  >
      <Container fluid  >
      <Navbar.Brand href="#" className=' web-name'>Baby Care Shop</Navbar.Brand>
          <Link  className="header-link  home-link" to="/homes">Home</Link>
          <Link  className="header-link  py-2" to="/addToCart">Cart</Link>
          

          {
            user?.email ? 
            <button 
            
            className="header-link border-0  bg-white"
             onClick={logOut}>Log-Out</button>
            :
            <Link  className="header-link  px-2" to="/login">Log-In</Link>
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
              <Link className='dashboard-link py-2' to="/allCloths">All Cloths</Link>
              <Link className='dashboard-link py-2' to="/allMilks">All Milks</Link>
              <Link className='dashboard-link py-2' to="/allToys">All Toys</Link>
              <Link className='dashboard-link py-2' to="/reviews">Reviews</Link>
              <Link className='dashboard-link py-2' to="/myOrders">My Order</Link>
              <Link className='dashboard-link py-2' to="/manageAllOrders">Manage All Orders</Link>
              <Link className='dashboard-link py-2' to="/addAProduct">Add A Product</Link>
              <Link className='dashboard-link py-2' to="/makeAdmin">Make Admin</Link>

             
              
              
              
              
              
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
};

export default Header;