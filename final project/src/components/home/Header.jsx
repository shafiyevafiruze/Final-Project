import { Component } from "react";
import img1 from "../../assets/hero-02.jpg";
import img2 from "../../assets/hero-01.jpg";
import img3 from "../../assets/about-01.jpg";
import img4 from "../../assets/category-01.jpg";
import img5 from "../../assets/about-02.jpg";
import img6 from "../../assets/category-02.jpg";
import img7 from "../../assets/category-03.jpg";
import "./header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="header-container">
          <div className="main">
            <div className="main-text">
              <p>WELCOME TO CERAMIC SHOP</p>
              <h1>Elevate Your Space with Ceramic Elegance</h1>
              <h2>Starting from just $149.00</h2>
            </div>
            <div className="main-img">
              <img className="img-1" src={img1} />
              <img className="img-2" src={img2} />
            </div>
          </div>
          <div className="second">
            <p>About Ceramic Shop</p>
            <h1>
              The versatility of ceramics is what makes them truly remarkable,
              with their presence in various forms such as stoneware and
              porcelain.
            </h1>
          </div>
          <div className="img-container">
            <div className="column-1">
              <img className="img-3" src={img3} />
              <p>THE BEST OR CERMAICS</p>
              <h1>Our Products Category​</h1>
              <p>
                Explore our exquisite collection of ceramic treasures that
                elevate your spaces and celebrate the artistry of craftsmanship.
                From dinnerware to decor, each piece in our product range is a
                testament to quality, style, and the timeless beauty of
                ceramics.
              </p>
              <img className="img-4" src={img4} />
              <div>
                <h2>Stylish Ceramic Home Decor</h2>
                <p>Starting from just $99.00</p>
              </div>
            </div>
            <div className="column-2">
              <img src={img5} />
              <h2>
                Welcome to Ceramic Shop, where passion meets craftsmanship to
                bring you a world of timeless beauty and creativity.
              </h2>
              <p>
                Our journey is steeped in the art of ceramics, where each piece
                tells a unique story. Get to know the heart and soul behind our
                store.
              </p>
              <button className="read_more_btn">READ MORE</button>
              <img className="img-6" src={img6} />
              <div className="img-6-div">
                <h2>Trending Ceramic Dinnerware</h2>
                <p>Starting from just $299.00</p>
              </div>
              <img className="img-7" src={img7} />
              <div className="img-7-div">
                <h2>Garden and Outdoor Accents</h2>
                <p>Starting from just $149.00</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
