import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numPersons, setNumPersons] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleSearch = () => {
    if (startDate && endDate && numPersons) {
      navigate("/rooms", {
        state: { startDate, endDate, numPersons },
      });
    } else {
      alert("Please fill all search fields.");
    }
  };

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
              to="/rooms"
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
              className="startDate"
            >
              <label htmlFor="startDate">Start Date</label>
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
              className="endDate"
            >
              <label htmlFor="endDate">End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="priceDiv"
            >
              <label htmlFor="price">Price</label>
              <input type="text" placeholder="Min. $340" />
            </div>


            <div
              data-aos="fade-up"
              data-aos-duration="3500"
              className="personDiv"
            >
              <label htmlFor="person">Number of Person</label>
              <input type="number" placeholder="Person" />
            </div>

            <button
              data-aos="fade-left"
              data-aos-duration="2000"
              className="btn"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
