import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css";

class Layout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-logo">
            <h2>CeramicShop</h2>
          </div>
          <ul className="navbar-links">
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
          </ul>
          <div className="navbar-cart">
            <Link to="/basket">
              <FaShoppingCart size={24} color="#fff" />
            </Link>
            {/* <p>{this.props.basket.length}</p> */}
          </div>
        </nav>

        <Outlet />
      </>
    );
  }
}
export default Layout;
