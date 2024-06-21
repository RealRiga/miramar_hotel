import React from "react";
import "./contactus.css"; // Import SCSS module

const ContactUs = () => {
  return (
    <section className="contactUs section">
      <div className="secContainer">
        <div className="mainContent">
          <form className="contactForm">
            <div className="secIntro">
              <h2 className="secTitle">Contact Us</h2>
              <p>Please fill out the form below to get in touch with us.</p>
            </div>

            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <div className="inputContainer">
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <div className="inputContainer">
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <div className="inputContainer">
                <textarea
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>

          <div className="flexContainer">
            <div className="contactInfo">
              <div className="detailItem">
                <strong>Contact Us:</strong> 09160359199
              </div>
              <div className="detailItem">
                <strong>Address:</strong> 18 mubarak
              </div>
              <div className="detailItem">
                <strong>Email:</strong> Aptech13@gmail.com
              </div>

              <div className="socialLinks">
                <a href="#facebook" className="socialLink">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#twitter" className="socialLink">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#instagram" className="socialLink">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="mapContainer">
              <div className="mapOverlay">
                <h3>Location Map</h3>
                {/* Embed Google Maps iframe */}
                <iframe
                  title="Hotel Location"
                  width="100%"
                  height="300"
                  loading="lazy"
                  allowFullScreen
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2188059982315!2d-0.1262366843688776!3d51.50072927963614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce2e89943f%3A0x4b583eaea5e1d5e3!2sThe%20Ritz%20London!5e0!3m2!1sen!2suk!4v1623994879467!5m2!1sen!2suk"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
