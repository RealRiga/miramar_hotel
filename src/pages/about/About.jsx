import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./about.css";

import img3 from "../../assets/climbing.jpg";
import img from "../../assets/customer.png";
import img2 from "../../assets/mountain.jpg";
import img4 from "../../assets/hotel3.jpg";



import video from "../../assets/video.mp4"

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <section className="about section grid">
      <div className="secContainer">
      <div className="hotelAboutUs flex">
          <div className="imageContainer container">
            <img src={img4} alt="Hiking Image" />
          </div>
          <div className="content">
            <h2 className="title">About Our Hotel</h2>
            <p>
              Welcome to our luxurious retreat in the heart of nature. Our hotel
              offers an unparalleled experience where modern comfort meets
              tranquility of the wilderness. Nestled amidst breathtaking mountain
              views and lush greenery, we pride ourselves on providing
              world-class hospitality and personalized service to our guests.
            </p>
            <p>
              Whether you're here for a relaxing getaway, a romantic escape, or
              an adventure-filled holiday, our hotel caters to every need with
              meticulously designed rooms, exceptional dining options, and
              state-of-the-art facilities. Immerse yourself in the beauty of
              nature while enjoying the comforts of home at our esteemed
              establishment.
            </p>
            <p>
              Our commitment to sustainability and community engagement drives us
              to preserve the environment and support local initiatives. Join us
              on a journey of luxury, relaxation, and exploration at our hotel,
              where every moment is crafted to exceed your expectations.
            </p>
          </div>
        </div><br/><br/>
        <h2 className="title">Why Choose US?</h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img2} alt="Image Name" />

            <h3>100+ Mountains</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health well-being.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img3} alt="Image Name" />

            <h3>1000+ Hikings</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health well-being.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img} alt="Image Name" />

            <h3>2000+ Customers</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health well-being.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2>Wonderful House experience in there!</h2>
              <p>
                The adventure subranking is based on an equally weighted average
                of scores from five country.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
