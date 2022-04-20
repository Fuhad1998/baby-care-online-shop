import React from "react";
import "./Footer.css";
import img1 from "../../../img/footer-ing/american-xpress-logo.jpg";
import img2 from "../../../img/footer-ing/bkash-logo.jpg";
import img3 from "../../../img/footer-ing/cash-logo.jpg";
import img4 from "../../../img/footer-ing/mastercard-logo.jpg";
import img5 from "../../../img/footer-ing/visa-logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row ">
        <div className="col-md-4 col-xs-12 col-sm-12 p-5">
          <h2 className="p-2 information-link">INFORMATION</h2>
          <h4 className="p-2 information-link"><Link className="link-text" to="/about">About Us</Link></h4>

          <h4 className="p-2 information-link"><Link className="link-text" to="/terms">Terms and conditions</Link></h4>
          <h4 className="p-2 information-link"><Link className="link-text" to="/delivery">Delivery</Link></h4>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-12 p-5">
          <h2 className="p-2 information-link">Contact Us</h2>
          <h4 className="p-2 information-link">
            <a className="link-text" href="https://web.facebook.com/"><i className="fab fa-facebook text-primary"> </i> Facebook</a>
          </h4>
          <h4 className="p-2 information-link link-text">
          <i className="fab fa-twitter text-danger "> </i> Twitter
          </h4>
          <h4 className="p-2 information-link">
            <a className="link-text" href="https://www.youtube.com/"><i className="fab fa-youtube text-danger"> </i> Youtube</a>
          </h4>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-12 p-5">
          <h2 className="p-2 information-link">PAYMENT</h2>
          <ul className="payment-container">
            <img className="footer-img information-link" src={img1} alt="" />

            <img className="footer-img information-link" src={img2} alt="" />

            <img className="footer-img information-link" src={img3} alt="" />

            <img className="footer-img information-link" src={img4} alt="" />

            <img className="footer-img information-link" src={img5} alt="" />
          </ul>
        </div>
      </div>
      <p className="text-center fs-6  p-5 ">
        <i className="  fas fa-copyright  "></i> Copy right 2022 By Fuwad
        Hossian
      </p>
    </div>
  );
};

export default Footer;
