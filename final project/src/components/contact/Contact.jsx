import { Component } from "react";
import "./style.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Last from "../home/Last";
import contact1 from "../../assets/contact-01.jpg";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="about-container">
          <div className="main-about">
            <h1>Contact Us</h1>
            <p>
              Step into the world of CeramicShop, where we’re dedicated to
              crafting elegant, functional ceramics that elevate your everyday
              life. Our journey is a testament to the artistry and craftsmanship
              that infuse each unique piece.
            </p>
          </div>
          <img src={contact1} />
        </div>
        <div className="get-in-touch">
          <div className="git-text">
            <div className="touch-text">
              <h1 className="get">Get In Touch</h1>
              <p className="share">
                Share some details here. This is Flexible section where you can
                share anything you want. It could be details or some
                information.
              </p>
            </div>
            <div className="address-box">
              <FaMapMarkerAlt style={{ color: "#025048", fontSize: "20px" }} />
              <div className="address-text">
                <p style={{ marginBottom: "8px", color: "#025048" }}>ADDRESS</p>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </div>
            <hr />

            <div className="phone-box">
              <FaPhone style={{ color: "#025048", fontSize: "20px" }} />
              <div className="phone-text">
                <p style={{ marginBottom: "8px", color: "#025048" }}>PHONE</p>
                <p>(+91) 987 654 321</p>
              </div>
            </div>
            <hr />
            <div className="email-box">
              <FaEnvelope style={{ color: "#025048", fontSize: "20px" }} />
              <div className="email-text">
                <p style={{ marginBottom: "8px", color: "#025048" }}>EMAIL</p>
                <p>info@contact.com</p>
              </div>
            </div>
            <hr />
            <p style={{ marginBottom: "8px", color: "#025048" }}>FOLLOW</p>
            <div className="social-icons-touch">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} color="#025048" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} color="#025048" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={21} color="#025048" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={22} color="#025048" />
              </a>
            </div>
          </div>
          <div className="form">
            <p style={{ fontWeight: "bold" }}>
              Name <span style={{ color: "red" }}>*</span>
            </p>
            <div>
              <input
                style={{ marginRight: "20px" }}
                type="text"
                placeholder="First"
              />
              <input type="text" placeholder="Last" />
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>
                Email <span style={{ color: "red" }}>*</span>
              </p>
              <input type="text" />
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Comment or Message</p>
              <textarea name="" id=""></textarea>
            </div>
            <button>SUBMIT</button>
          </div>
        </div>
        <div className="FAQ-container">
          <div className="FAQ-text">
            <h1>FAQs</h1>
            <p>
              Find answers to common questions about our ceramic products,
              ordering, shipping, care, and more. If you need further
              information, feel free to contact our support team.
            </p>
          </div>
          <div className="FAQ-buttons">
            <button>
              Ordering and Shipping
              <span style={{ marginLeft: "340px" }}></span>
            </button>
            <button>
              Product Care and Maintenance
              <span style={{ marginLeft: "274px" }}></span>
            </button>
            <button>
              Returns and Refunds <span style={{ marginLeft: "355px" }}></span>
            </button>
            <button>
              Custom Orders and Personalization
              <span style={{ marginLeft: "232px" }}></span>
            </button>
            <button>
              Contact and Customer Support
              <span style={{ marginLeft: "270px" }}></span>
            </button>
          </div>
        </div>
        <Last />
      </>
    );
  }
}

export default Contact;
