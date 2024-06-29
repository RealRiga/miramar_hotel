import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchBookedRooms, cancelBookedRoom } from "../../apiService/api";
import "./booking.css";

const Bookings = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchUserBookedRooms();
  }, []);

  const fetchUserBookedRooms = async () => {
    try {
      const roomsData = await fetchBookedRooms();
      setBookedRooms(roomsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching booked rooms:", error);
      setError("Failed to fetch booked rooms. Please try again.");
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      await cancelBookedRoom(bookingId);
      setBookedRooms(bookedRooms.filter((room) => room.id !== bookingId));
    } catch (error) {
      console.error("Error canceling booking:", error);
    }
  };

  const renderBookedRooms = () => {
    if (loading) {
      return <p>Loading booked rooms...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (bookedRooms.length === 0) {
      return <p>No rooms booked yet.</p>;
    }

    return (
      <div className="bookedRooms">
        {bookedRooms.map((room) => (
          <div key={room.id} className="bookedRoom">
            <h3>{room.roomName}</h3>
            <p>Status: {room.status}</p>
            {room.status === "pending" && (
              <button onClick={() => handleCancelBooking(room.id)}>Cancel</button>
            )}
          </div>
        ))}
      </div>
    );
  };




};

export default Bookings;
