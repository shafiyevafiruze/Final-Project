import "./basket.css";
import { Component } from "react";
import { addCeramic, deleteCeramic } from "../redux/Actions";
import { connect } from "react-redux";

class Basket extends Component {
  render() {
    return (
      <div className="basket-container">
        <h1>Cart</h1>
        <div className="table-container">
          <table className="table-1">
            <thead>
              <tr>
                <th></th>
                <th className="product-th">Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.basket.map((obj, index) => (
                <tr key={index}>
                  <td>
                    <button onClick={() => this.props.deleteCeramic(index)}>
                      &times;
                    </button>
                  </td>
                  <td className="td-img">
                    <img src={obj.img_url} />
                    <p>{obj.name}</p>
                  </td>
                  <td>
                    <p>{obj.price}$</p>
                  </td>
                  <td className="btns">
                    <button onClick={() => this.props.deleteCeramic(index)}>
                      -
                    </button>
                    {/* <span>{obj.quantity}</span> */}
                    <button onClick={() => this.props.addCeramic(index)}>
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table-2">
            <tbody>
              <tr>
                <th colSpan="2">Cart totals</th>
              </tr>
              <tr>
                <td>
                  <strong>Subtotal</strong>
                </td>
                <td>{this.props.total_price}$</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>{this.props.total_price}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { basket: state.basket, total_price: state.total_price };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCeramic: (index) => dispatch(addCeramic(index)),
    deleteCeramic: (index) => dispatch(deleteCeramic(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
