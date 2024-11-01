import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Layout from "./components/layout/Layout";
import Basket from "./components/basket/Basket";
import { Ceramicstore } from "./components/redux/Store";

function App() {
  return (
    <>
      <Provider store={Ceramicstore}>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="basket" element={<Basket />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
