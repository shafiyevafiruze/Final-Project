import React, { Component } from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { addCeramic } from "../redux/Actions";

class Shop extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <h1 className="shop-text">Shop</h1>
        <hr />
        <div className="all-11">
          <p>Showing all 11 results</p>
          <select>
            <option value="Default Sorting">Default Sorting</option>
            <option value="Sort by popularity">Sort by Popularity</option>
            <option value="Sort by Avarage Rating">
              Sort by Avarage Rating
            </option>
            <option value="Sort by Latest">Sort by Latest</option>
            <option value="Sort by Price: low to high">
              Sort by Price: low to high
            </option>
            <option value="Sort by price: high to low">
              Sort by price: high to low
            </option>
          </select>
        </div>
        <div className="info-main-2">
          {this.props.products.map((obj, index) => (
            <div className="main-1" key={index}>
              <img src={obj.img_url} alt={obj.name} />
              <p>{obj.type}</p>
              <h4>
                <a href="#">{obj.name}</a>
              </h4>
              <div className="star" style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9e9e9e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-star"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>
              <h5>
                <del>$237.00</del> ${obj.price}
              </h5>
              <button onClick={() => this.props.addCeramic(index)}>
                <FaShoppingCart size={24} color="#025048" />
              </button>
              <p className="sale">Sale!</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCeramic: (index) => {
      dispatch(addCeramic(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
