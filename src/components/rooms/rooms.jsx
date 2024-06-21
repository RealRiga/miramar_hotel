import React, { useState, useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle, MdBathtub, MdKingBed } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './rooms.css';
import { fetchRooms } from '../../apiService/api';

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchRoomsFromApi();
  }, []);

  const fetchRoomsFromApi = async () => {
    try {
      const roomsData = await fetchRooms();
      setRooms(roomsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setError('Failed to fetch rooms. Please try again.');
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading rooms...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="rooms container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Available Rooms</h2>
        </div>

        <div className="mainContent grid">
          {rooms.map(({ id, image, title, desc, bed, bathtub, wifi, shuttle, price }) => (
            <div key={id} data-aos="fade-up" data-aos-duration="3000" className="singleRoom">
              <div className="destImage">
              <img src={`http://localhost:8000${image}`} alt="" />
              </div>
              <div className="roomBody">
              <div className="location flex">
                    <small>{title}</small>
                  </div>
                <div className="price flex">
                  <h4>${price}</h4>
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
                  Book Now
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Room;
