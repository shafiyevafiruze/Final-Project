import { Component } from "react";
import "./info.css";
import bcg_img from "../../assets/cta-bg.jpg";
import human1 from "../../assets/human1.jpg";
import human2 from "../../assets/human2.jpg";
import { FaShoppingCart } from "react-icons/fa"; // basket icon
import "@fortawesome/fontawesome-free/css/all.min.css";
import { connect } from "react-redux";
import { addCeramic } from "../redux/Actions";

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="info-container">
          <p className="most">MOST POPULAR</p>
          <h1>Discover the Latest Additions at Your Top Choice Flower Shop</h1>
          <div className="info-main">
            {this.props.products.map((obj, index) => (
              <div className="main-1">
                <img src={obj.img_url} />
                <p>{obj.type}</p>
                <h4>{obj.name}</h4>
                <div className="star" style={{ display: "flex", gap: "2px" }}>
                  <svg
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
                  <svg
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
                  <svg
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
                  <svg
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
                  <svg
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
                </div>
                <h5>
                  <del>$237.00</del> ${obj.price}
                </h5>
                <p className="sale">Sale!</p>
                <button onClick={() => this.props.addCeramic(index)}>
                  <FaShoppingCart size={24} color="#025048" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div
          className="begin-container"
          style={{
            backgroundImage: `url(${bcg_img})`,
          }}
        >
          <div>
            <h1>Begin Your Ceramic Journey Explore Our Stunning Collections</h1>
            <p>Starting from just $149.00</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="minimalist">
          <p className="trend">Trending Now</p>
          <h1>Minimalist Ceramic Designs</h1>
          <div className="minimalist-img">
            {this.props.shops.map((obj, index) => (
              <div className="main-1">
                <img src={obj.img_url} />
                <p>{obj.type}</p>
                <h4>{obj.name}</h4>
                <div className="star" style={{ display: "flex", gap: "2px" }}>
                  <svg
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
                  <svg
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
                  <svg
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
                  <svg
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
                  <svg
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
                </div>
                <h5>
                  <del>$237.00</del> ${obj.price}
                </h5>
                <p className="sale">Sale!</p>
                <button onClick={() => this.props.addCeramic(index)}>
                  <FaShoppingCart size={24} color="#025048" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-box">
          <p>Testimonial</p>
          <h1>What Our Customers Say</h1>
          <div className="cmnt-box">
            <div className="cmnt-box-1">
              <div className="stars">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="human1">
                <img src={human1} />
                <div>
                  <p>Wade Warren</p>
                  <p>Business Man</p>
                </div>
              </div>
            </div>
            <div className="cmnt-box-2">
              <div className="stars">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="human2">
                <img src={human2} />
                <div>
                  <p>Mila Kunis</p>
                  <p>Fashion Designer</p>
                </div>
              </div>
            </div>
          </div>
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
    addCeramic: () => dispatch(addCeramic()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
