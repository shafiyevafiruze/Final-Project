import { Component } from "react";
import "./style.css";
import Last from "../home/Last";
import about3 from "../../assets/about-03.jpg";
import our_story from "../../assets/our-story.jpg";
import our_journey from "../../assets/our-journey.jpg";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="about-container">
          <div className="main-about">
            <h1>About Us</h1>
            <p>
              Step into the world of CeramicShop, where we’re dedicated to
              crafting elegant, functional ceramics that elevate your everyday
              life. Our journey is a testament to the artistry and craftsmanship
              that infuse each unique piece.
            </p>
          </div>
          <img src={about3} />
        </div>
        <div className="story-container">
          <div className="story-main">
            <div className="story-h1">
              <p>Our Story</p>
              <h1>Explore CeramicShop and Our Ceramic Artistry</h1>
            </div>
            <div className="story-p">
              <p>
                Step into the world of CeramicShop, where we’re dedicated to
                crafting elegant, functional ceramics that elevate your everyday
                life. Our journey is a testament to the artistry and
                craftsmanship that infuse each unique piece. Discover our story,
                meet the talented artisans who bring these creations to life,
                and experience the exceptional beauty that our ceramics add to
                your surroundings. Explore the heart and soul of our store,
                where every piece is a work of art, designed to make your
                moments more beautiful and special.​
              </p>
            </div>
          </div>
          <img src={our_story} />
        </div>
        <div className="journey-container">
          <img src={our_journey} />
          <div className="journey-main">
            <p>Our Journey</p>
            <h1>Our Ceramic Odyssey Crafting Beauty and Quality.</h1>
            <p>
              Our company story is a testament to the enduring love for
              craftsmanship, where we combine our passion for ceramics with an
              unwavering commitment to quality and timeless beauty. Explore the
              journey that has led us to become a trusted source for exquisite
              ceramic products.We're proud to share our story, which mirrors the
              growth of a dream into a thriving destination for exceptional
              creations, reflecting artistry and innovation.
            </p>
            <br />
            <p>
              Our dedication to crafting elegant, functional ceramic pieces that
              enhance everyday living is at the heart of our narrative, and it’s
              a story we’re excited to share with you.
            </p>
          </div>
        </div>
        <div className="vision-container">
          <div className="vision">
            <h1>Our Vision</h1>
            <p>
              Our vision is to infuse every home with the timeless beauty and
              functionality of ceramics. We are dedicated to creating elegant,
              handcrafted ceramic pieces that elevate everyday living, whether
              it's enjoying a meal, decorating a space, or finding the perfect
              gift. Our mission is to inspire and bring artistry into daily
              life, providing a canvas of creativity through ceramics.
            </p>
          </div>
          <div className="goals">
            <h1>Our Goals</h1>
            <p>
              Our values are the foundation upon which [Your Ceramicis built. We
              prioritize craftsmanship, quality, and creativity in all that we
              do. Integrity, authenticity, and sustainability are at the core of
              our values, ensuring that our products reflect not just beauty,
              but also ethical and environmental responsibility. We believe in
              the power of ceramics to connect people, transform spaces, and
              create lasting memories.
            </p>
          </div>
        </div>
        <Last />
      </>
    );
  }
}

export default About;
