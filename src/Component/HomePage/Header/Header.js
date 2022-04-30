import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./Header.css";


const Header = () => {
  const { user, logOut, admin, carts } = UseAuth();
  

  return (
    <Navbar expand={false} className="bg-white Regular shadow py-3">
      <Container fluid>
        <Navbar.Brand href="#" className=" web-name">
        <i className="fa-solid fa-baby pe-2"></i>
          Baby Care Shop
        </Navbar.Brand>
        <Link className="header-link  home-link" to="/homes">
          Home
        </Link>

        {user?.email ? (
          <button className="header-link border-0  bg-white" onClick={logOut}>
            Log-Out
          </button>
        ) : (
          <Link className="header-link  px-2" to="/login">
            Log-In
          </Link>
        )}
      
        <Link  className="header-link sopping-cart px-2" to="/addToCart">
        {carts.length}
        <i className="fa-solid fa-cart-shopping font-icon"></i>
        </Link>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          style={{ width: "300px" }}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="dashboard-link py-2" to="/allCloths">
                All Cloths
              </Link>
              <Link className="dashboard-link py-2" to="/allMilks">
                All Milks
              </Link>
              <Link className="dashboard-link py-2" to="/allToys">
                All Toys
              </Link>

              {user?.email && (
                <Link className="dashboard-link py-2" to="/reviews">
                  Reviews
                </Link>
              )}

              {user?.email && (
                <Link className="dashboard-link py-2" to="/myOrders">
                  My Order
                </Link>
              )}
              {admin && (
                <Link className="dashboard-link py-2" to="/manageAllOrders">
                  Manage All Orders
                </Link>
              )}

              {admin && (
                <Link className="dashboard-link py-2" to="/addAProduct">
                  Add A Product
                </Link>
              )}
              {admin && (
                <Link className="dashboard-link py-2" to="/makeAdmin">
                  Make Admin
                </Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
