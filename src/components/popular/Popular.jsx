import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./popular.css";

import img from "../../assets/hotel1.jpg";
import img2 from "../../assets/restaurant.jpg";
import img3 from "../../assets/hotel3.jpg";
import img4 from "../../assets/hotel4.jpg";

// Here we used an high order array method to display all the destination using map.
// To do so we need to list all the destination in one array "Data" and later we shall call each destination by index/id.

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "5 Star Rooms",
    section: "Rooms",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "5 Star Meals",
    section: "Restaurant",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Resorts",
    section: "Best Resorts",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Tourist Centers",
    section: "Tourist Centers",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Services </h2>
            <p>
              From historical cities to natural spectaculars, come see the best
              of th world!
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, section }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image Title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{section}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{section}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
