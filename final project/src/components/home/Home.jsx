import React, { Component } from "react";
import Header from "./Header";
import Info from "./Info";
import Last from "./Last";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Info />
        <Last />
      </>
    );
  }
}

export default Home;
