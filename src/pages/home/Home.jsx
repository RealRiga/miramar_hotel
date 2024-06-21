import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import About from "../../components/about/About";
import Blog from "../../components/blog/Blog";
import Offer from "../../components/offers/Offers";
import Popular from "../../components/popular/Popular";
import "./home.css";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-up" className="title">
              Plan Your Trip With Miramar Hotel
            </h1>

            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
              Travel to your favorite city with respectful of the environment!
            </p>

            <NavLink
              to="/bookings"
              data-aos="fade-up"
              data-aos-duration="3000"
              className="btn"
            >
              Explore Now
            </NavLink>
          </div>

          <div className="homeCard grid">
          

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="distDiv"
            >
              <label htmlFor="distance">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              className="distDiv"
            >
              <label htmlFor="distance">End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>


            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="priceDiv"
            >
              <label htmlFor="price">Price</label>
              <input type="text" placeholder="Min. $340" />
            </div>

            <button
              data-aos="fade-left"
              data-aos-duration="2000"
              className="btn"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <Popular />
      <Offer />
      <About />
      <Blog />
    </>
  );
};

export default Home;
