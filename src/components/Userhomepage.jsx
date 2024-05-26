import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styling/Userhome.css";
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import home from '../images/home.jpeg';
import office from '../images/office.jpeg';
import spacebook from "../images/spacebook.jpeg";
import bookspace from "../images/bookspace.jpeg";

import Navbar from "./Navbar";

const Userhomepage = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [selectedSpaceId, setSelectedSpaceId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

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
      const response = await axios.get("http://localhost:5000/bookings");
      setBookings(response.data.bookings);
    } catch (error) {
      toast.error("Failed to fetch bookings");
    }
  };

  const handleBooking = async () => {
    const bookingData = {
      space_id: selectedSpaceId,
      start_time: startTime,
      end_time: endTime,
      user_id: userId,
      status: status,
      payment_status: paymentStatus,
    };

    console.log("Booking data:", bookingData); // Log the booking data

    try {
      const response = await axios.post("http://localhost:5000/bookings", bookingData);
      toast.success(response.data.message);
      fetchBookings();
    } catch (error) {
      console.error("Error booking space:", error.response); // Log the error response
      toast.error("Failed to book space");
    }
  };

  return (
    <div className="user-homepage-wrapper">
      <Navbar />
      <div className="user-homepage-container">
        <div className="header">
          <h1><strong>Home Space</strong></h1>
        </div>
        <p><strong>Welcome to Spacer, a place where you can make a booking appointment for a meeting you have.</strong></p>
        <div className="image-container">
          <img src={home} alt="Home Snapshot" className="home-image" />
          <img src={office} alt="Office Snapshot" className="imager" />
        </div>
        <div className="section">
          <h1><strong>Available Spaces</strong></h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="space-container">
              {spaces.map((space) => (
                <div key={space.id} className="space-item">
                  <div className="space-details">
                    <h2>{space.name}</h2>
                    <p>{space.description}</p>
                    <div className="space-info">
                      <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <span>{space.location}</span>
                      </div>
                      <div className="info-item">
                        <FaDollarSign className="info-icon" />
                        <span>Price per hour: ${space.price_per_hour}</span>
                      </div>
                    </div>
                    <button onClick={() => setSelectedSpaceId(space.id)}>Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="section">
          <h1><strong>Available Booking</strong></h1>
          <p><strong>Make a booking with us and enjoy great services</strong></p>
          <div className="image-container">
            <img src={spacebook} alt="Space Booking Snapshot" className="home-image" />
            <img src={bookspace} alt="Book Space Snapshot" className="imager" />
          </div>
        </div>
        <div className="section">
          <h2>Book Space</h2>
          <div className="booking-form">
            <label htmlFor="user_id">User ID:</label>
            <input type="text" id="user_id" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <label htmlFor="space_id">Space ID:</label>
            <input type="text" id="space_id" value={selectedSpaceId} onChange={(e) => setSelectedSpaceId(e.target.value)} />
            <label htmlFor="start_time"><FaCalendarAlt className="form-icon" />Start Time:</label>
            <input type="datetime-local" id="start_time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <label htmlFor="end_time"><FaCalendarAlt className="form-icon" />End Time:</label>
            <input type="datetime-local" id="end_time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            <label htmlFor="status">Status:</label>
            <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
            <label htmlFor="payment_status">Payment Status:</label>
            <input type="text" id="payment_status" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} />
            <button onClick={handleBooking}>Book</button>
          </div>
        </div>
        <div className="section">
          <h2>My Bookings</h2>
          <div className="list-container">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                {/* Booking item details */}
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Userhomepage;
