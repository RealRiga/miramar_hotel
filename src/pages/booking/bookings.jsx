import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Rooms from "../../components/rooms/rooms";
import Restaurant from "../../components/restaurant/restaurant";
import Resorts from "../../components/rooms/rooms";
// import Rooms from "../../components/rooms/rooms";
// import Rooms from "../../components/rooms/rooms";


import "./booking.css";

const Bookings = () => {
  const [activeCategory, setActiveCategory] = useState("rooms");

  const categories = [
    { name: "Rooms", value: "rooms" },
    { name: "Restaurant", value: "restaurant" },
    { name: "Resorts", value: "resorts" },
    { name: "Tour Centers Around", value: "tourism" },
    { name: "Cars", value: "car" },

  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const renderContent = () => {
    switch (activeCategory) {
      case "rooms":
        return <Rooms />;
      case "restaurant":
         return <Restaurant />;
      // case "resorts":
      //   return <Resorts />;
      // case "tourism":
      //   return <TouristCenter />;
      // case "car":
      //   return <CarContent />;
      default:
        return <div>Select a category</div>;
    }
  };

  const handleCategoryClick = (categoryValue) => {
    setActiveCategory(categoryValue);
  };

  return (
    <section className="bookings container section">
      <div className="bookingsContainer">
        <nav
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bookingsNav"
        >
          <ul className="bookingsNavList">
            {categories.map((category) => (
              <li
                key={category.value}
                className={`bookingsNavItem ${
                  activeCategory === category.value ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category.value)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
        <div className="bookingsContent">{renderContent()}</div>
      </div>
    </section>
  );
};

export default Bookings;
