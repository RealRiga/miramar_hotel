import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle, MdBathtub, MdKingBed } from "react-icons/md";
import img6 from "../../assets/hotel1.jpg";
import img10 from "../../assets/hotel10.jpg";
import img2 from "../../assets/hotel2.jpg";
import img3 from "../../assets/hotel3.jpg";
import img4 from "../../assets/hotel4.jpg";
import img5 from "../../assets/hotel5.jpg";
import img from "../../assets/hotel6.jpg";
import img7 from "../../assets/hotel7.jpg";
import img8 from "../../assets/hotel8.jpg";
import img9 from "../../assets/hotel9.jpg";
import "./restaurant.css";

// we used the high order array method (Map) to list our offers
const Restaurants = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Single Room",
    desc: "Mock up frame in bedroom interior background, 3d render",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$440",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Single Room",
    desc: "Interior of a modern cozy bedroom with furniture in pastel tones.",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$340",
  },

  {
    id: 3,
    imgSrc: img3,
    desc: "Concept of minimalist design. Space for creative idea. 3d rendering.",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$640",
  },

  {
    id: 4,
    imgSrc: img4,
    desc: "Bedroom and living area on forest view for hotel.",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$500",
  },

  {
    id: 5,
    imgSrc: img5,
    desc: "Concept of minimalist design. Space for creative idea. 3d rendering",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$700",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Single Room",
    desc: "Interior of a modern cozy bedroom with furniture in pastel tones.",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$440",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Single Room",
    desc: "Mock up frame in bedroom interior background, 3d render",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$340",
  },

  {
    id: 8,
    imgSrc: img8,
    desc: "Modern interior of bedroom with green wall, 3d render",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$640",
  },

  {
    id: 9,
    imgSrc: img9,
    desc: "Interior of a modern cozy bedroom with furniture in pastel tones.",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$500",
  },

  {
    id: 10,
    imgSrc: img10,
    desc: "IConcept of minimalist design. Space for creative idea. 3d rendering",
    bed: "1 bed",
    wifi: "Wifi",
    bathtub: "Bathtub",
    shuttle: "Shuttle",
    price: "$700",
  },
];

const Restaurant = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="restaurants container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Available Rooms</h2>
          <p>
            Discover our luxurious single rooms offering stunning views and
            exceptional comfort. Whether you're traveling for business or
            pleasure, our rooms are designed to make your stay memorable.
          </p>
        </div>

        <div className="mainContent restaurantContent grid">
          {Restaurants.map(
            ({
              id,
              imgSrc,
              destTitle,
              desc,
              bed,
              bathtub,
              wifi,
              shuttle,
              price,
            }) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="singleRoom"
                >
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />
                  </div>
                  <div className="restaurantBody">
                    <div className="price flex">
                      <h4>{price}</h4>

                      <span className="status">For Rent</span>
                    </div>

                    <div className="amenities flex">
                      <div className="location flex">
                        <small>{desc}</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>{bed}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>{bathtub}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>{wifi}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>{shuttle}</small>
                      </div>
                    </div>
                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
