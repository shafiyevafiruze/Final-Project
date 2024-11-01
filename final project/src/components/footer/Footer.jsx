import { Component } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <nav className="footer-container">
          <div className="footer-logo">
            <p>CeramicShop</p>
          </div>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} color="#025048" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} color="#025048" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} color="#025048" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} color="#025048" />
              </a>
            </div>
          </ul>
        </nav>
        <hr />
        <div className="last-container">
          <p className="p1">Copyright@2024</p>
          <p className="p2">All rights reserved</p>
        </div>
      </>
    );
  }
}

export default Footer;
