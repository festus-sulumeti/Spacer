import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Userhomepage = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchSpaces();
    fetchBookings();
  }, []);

  const fetchSpaces = async () => {
    try {
      const response = await axios.get("http://localhost:5000/spaces");
      setSpaces(response.data.spaces);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to fetch spaces");
      setLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/bookings");
      const data = await response.json();
      setBookings(data.bookings);
    } catch (error) {
      toast.error("Error fetching bookings");
    }
  };

  return (
    <div>
      <h1>Available Spaces</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-list">
          {spaces.map((space) => (
            <div key={space.id} className="space-item">
              <h2>{space.name}</h2>
              <p>{space.description}</p>
              <p>Location: {space.location}</p>
              <p>Price per hour: ${space.price_per_hour}</p>
              <Link to={`/space/${space.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}

        <div className="section">
          <h2>Make Bookings Based on the available spaces</h2>
          <div className="list-container">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                <p><strong>User ID:</strong> {booking.user_id}</p>
                <p><strong>Space ID:</strong> {booking.space_id}</p>
                <p><strong>Start Time:</strong> {booking.start_time}</p>
                <p><strong>End Time:</strong> {booking.end_time}</p>
                <p><strong>Status:</strong> {booking.status}</p>
                <p><strong>Payment Status:</strong> {booking.payment_status}</p>
              </div>
            ))}
          </div>
        </div>
      <ToastContainer />
    </div>
  );
};

export default Userhomepage;
