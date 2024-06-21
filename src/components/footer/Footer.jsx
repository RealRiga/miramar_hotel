import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { RiHotelFill } from "react-icons/ri";
import "./footer.css";

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          
          <div data-aos="fade-right" data-aos-duration="2000" className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <RiHotelFill className="icon" />
                Miramar
                <span className="">Hotel</span>
              </h1>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitterX className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div data-aos="fade-left" data-aos-duration="5000" className="footerLinks">
          <span className="linkTitle">Contact Us: </span>
          <span className="phone">+2348106040478</span>
          <span className="email">adeolayisa32@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
