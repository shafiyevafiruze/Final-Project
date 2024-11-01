import { Component } from "react";
import "./product.css";
import cup01 from "../../assets/ceramic_cup01.jpg";
import cup_01 from "../../assets/ceramic-cup-01.jpg";
import cup02 from "../../assets/ceramic_cup02.jpg";
import cup03 from "../../assets/ceramic_cup03.jpg";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: cup_01, // Başlanğıc böyük şəkil
    };
  }

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  render() {
    return (
      <div className="product-container">
        <div className="s-imgs">
          <img src={cup01} onClick={() => this.handleImageClick(cup01)} />
          <img src={cup02} onClick={() => this.handleImageClick(cup02)} />
          <img src={cup03} onClick={() => this.handleImageClick(cup03)} />
        </div>
        <div className="lg-img">
          <img src={this.state.selectedImage} />
        </div>
        <div className="product-txt">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nam dolorem! Consequatur possimus voluptates eligendi rem temporibus
            recusandae vitae tempora, sunt, cumque adipisci, iusto eius! Tempora
            cumque facilis veniam harum quos eos fuga explicabo exercitationem
            quo tempore. Dolores maiores ducimus quisquam expedita enim, aliquam
            reprehenderit amet voluptate quis illum quas, id itaque placeat iure
            harum vero atque dolore vel! Accusamus et distinctio libero illo quo
            aliquam incidunt corrupti nesciunt minus unde beatae fuga nisi,
            laboriosam possimus voluptas voluptate atque vero voluptatibus id
            ducimus molestiae, temporibus mollitia? Iure velit quis, delectus
            possimus corporis ad minus sit veniam fuga similique est maxime!
          </p>
        </div>
      </div>
    );
  }
}

export default Product;

// import React from "react";
// import "./product.css";

// const Product = ({ product, addToCart }) => {
//   return (
//     <div className="product-card" onClick={() => addToCart(product)}>
//       <img src={product.img_url} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.type}</p>
//       <p>{product.price}</p>
//     </div>
//   );
// };

// export default Product;

import info_img1 from "../../assets/ceramic-cup-01.jpg";
import info_img2 from "../../assets/ceramic-planter-01.jpg";
import info_img3 from "../../assets/product-01.jpg";
import info_img4 from "../../assets/product-02.jpg";
import info_img5 from "../../assets/product-07.jpg";
import info_img6 from "../../assets/contact-01.jpg";
import info_img7 from "../../assets/product-09.jpg";
import info_img8 from "../../assets/product-03.jpg";
import info_img9 from "../../assets/product-05.jpg";
import info_img10 from "../../assets/product-06.jpg";
import info_img11 from "../../assets/product-08.jpg";
