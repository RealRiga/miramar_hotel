import React, { useState, useEffect } from 'react';
import { BsArrowRightShort, BsFillXCircleFill } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { fetchOffers, bookRoom, handleCancelBooking } from '../../apiService/api'; // Ensure correct import path
import './offers.scss';

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchOffersFromApi();
    checkUserLoginStatus(); // Check login status on component mount
  }, []);

  const fetchOffersFromApi = async () => {
    try {
      const offersData = await fetchOffers();
      setOffers(offersData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setError("Failed to fetch offers. Please try again.");
      setLoading(false);
    }
  };

  const checkUserLoginStatus = () => {
    const loggedIn = Boolean(localStorage.getItem("token"));
    setIsLoggedIn(loggedIn); // Update isLoggedIn state based on token presence
  };

  const handleBookNowClick = async (offerId) => {
    if (!isLoggedIn) {
      navigate("/login");
      return; // Exit early if user is not logged in
    }
  
    try {
      const response = await bookRoom({ offerId });
      if (response.success) {
        console.log("Room booked successfully!");
        fetchOffersFromApi(); // Refresh offers after booking
      } else {
        console.error("Failed to book room:", response.error);
        // Handle error appropriately (e.g., show error message)
      }
    } catch (error) {
      console.error("Error booking room:", error);
      // Handle error appropriately (e.g., show error message)
    }
  };

  if (loading) {
    return <p>Loading offers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>From historical cities to natural spectaculars, come see the best of the world!</p>
        </div>

        <div className="mainContent grid">
          {offers.map((offer) => (
            <div key={offer.id} data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
              <div className="destImage">
                <img src={`http://localhost:8000${offer.image}`} alt={offer.title} />
                <span className="discount">{offer.discount}% Off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>${offer.price}</h4>
                  <span className="status">For Rent</span>
                </div>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>{offer.beds} Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className="icon" />
                    <small>{offer.bathtub} Bathtub</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationOn className="icon" />
                  <small>{offer.location}</small>
                </div>
                <div className="buttons flex">
                  {/* Conditionally render based on offer status */}
                  {offer.status === 'pending' ? (
                    <button className="btn cancelBooking" onClick={() => handleCancelBooking(offer.bookingId)}>
                      Cancel Booking
                      <BsFillXCircleFill className="icon" />
                    </button>
                  ) : (
                    <button className="btn bookNow" onClick={() => handleBookNowClick(offer.id)}>
                      Book Now
                      <BsArrowRightShort className="icon" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
