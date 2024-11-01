import { Component } from "react";
import "./last.css";
import last from "../../assets/footer-cta.jpg";

class Last extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="last-box">
          <img src={last} />
          <div>
            <h1>
              Uncover the World of Ceramic Artisty Start Your Journey Here!
            </h1>
            <button className="shop-btn">SHOP NOW</button>
          </div>
        </div>
      </>
    );
  }
}

export default Last;
