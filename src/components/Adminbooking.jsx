import axios from "axios";
import "../styling/Bookings.css";
import "../styling/Cat.css";
import "../styling/Adminhomepage.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { FaCalendarAlt } from "react-icons/fa";


const Adminbooking = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedSpaceId, setSelectedSpaceId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [hasBookings, setHasBookings] = useState(false);



  const handleBackClick = () => {
    window.location.href = "/Adminhomepage";
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/bookings");
      setBookings(response.data.bookings);
    // Check if there are bookings and update hasBookings accordingly
    if (response.data.bookings.length > 0) {
      setHasBookings(true);
    } else {
      setHasBookings(false);
    }
    } catch (error) {
      toast.error("Failed to fetch bookings");
    }
  };


  const handleBooking = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/bookings",
        {
          space_id: selectedSpaceId,
          start_time: startTime,
          end_time: endTime,
          user_id: userId,
          status: status,
          payment_status: paymentStatus,
        }
      );
      toast.success(response.data.message);
      fetchBookings();
      setShowBookingForm(false);
    } catch (error) {
      toast.error("Failed to book space");
    }
  };


  return (
    <div className="bookings-container">
      <div className="back-arrow" onClick={handleBackClick}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
      </div>
      <h1>Bookings made</h1>
      {hasBookings ? (
        // <p>You have bookings</p>
              // 1. Added Booking View Section
            <div className="section">
              <h2>View All Bookings</h2>
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
      ) : (
        <>
          <p className="no-bookings">No bookings have been made yet.</p>
          <div className="loader">
            <div className="wrappering">
                <div className="catContainer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 733 673"
                    className="catbody"
                >
                    <path
                    fill="#212121"
                    d="M111.002 139.5C270.502 -24.5001 471.503 2.4997 621.002 139.5C770.501 276.5 768.504 627.5 621.002 649.5C473.5 671.5 246 687.5 111.002 649.5C-23.9964 611.5 -48.4982 303.5 111.002 139.5Z"
                    ></path>
                    <path fill="#212121" d="M184 9L270.603 159H97.3975L184 9Z"></path>
                    <path fill="#212121" d="M541 0L627.603 150H454.397L541 0Z"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 158 564"
                    className="tail"
                >
                    <path
                    fill="#191919"
                    d="M5.97602 76.066C-11.1099 41.6747 12.9018 0 51.3036 0V0C71.5336 0 89.8636 12.2558 97.2565 31.0866C173.697 225.792 180.478 345.852 97.0691 536.666C89.7636 553.378 73.0672 564 54.8273 564V564C16.9427 564 -5.4224 521.149 13.0712 488.085C90.2225 350.15 87.9612 241.089 5.97602 76.066Z"
                    ></path>
                </svg>
                <div className="text">
                    <span className="bigzzz">Z</span>
                    <span className="zzz">Z</span>
                </div>
                </div>
                <div className="wallContainer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 500 126"
                    className="wall"
                >
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="3"
                    x2="450"
                    y1="3"
                    x1="50"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="85"
                    x2="400"
                    y1="85"
                    x1="100"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="122"
                    x2="375"
                    y1="122"
                    x1="125"
                    ></line>
                    <line strokeWidth="6" stroke="#7C7C7C" y2="43" x2="500" y1="43"></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="1.99391"
                    x2="115.5"
                    y1="43.0061"
                    x1="115.5"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.00002"
                    x2="189"
                    y1="43.0122"
                    x1="189"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.00612"
                    x2="262.5"
                    y1="43.0183"
                    x1="262.5"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.01222"
                    x2="336"
                    y1="43.0244"
                    x1="336"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.01833"
                    x2="409.5"
                    y1="43.0305"
                    x1="409.5"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="153"
                    y1="84.0122"
                    x1="153"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="228"
                    y1="84.0122"
                    x1="228"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="303"
                    y1="84.0122"
                    x1="303"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="378"
                    y1="84.0122"
                    x1="378"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="84"
                    x2="192"
                    y1="125.012"
                    x1="192"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="84"
                    x2="267"
                    y1="125.012"
                    x1="267"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="84"
                    x2="342"
                    y1="125.012"
                    x1="342"
                    ></line>
                </svg>
                </div>
            </div>
          </div>

          {showBookingForm && (
              <div className="booking-form">
              <label htmlFor="user_id">User ID:</label>
              <input type="text" id="user_id" value={userId} onChange={(e) => setUserId(e.target.value)} />
              <label htmlFor="space_id">Space ID:</label>
              <input type="text" id="space_id" value={selectedSpaceId} onChange={(e) => setSelectedSpaceId(e.target.value)} />
              <label htmlFor="start_time"><FaCalendarAlt className="form-icon" />Start Time:</label>
              <input type="datetime-local" id="start_time" onChange={(e) => setStartTime(e.target.value)} />
              <label htmlFor="end_time"><FaCalendarAlt className="form-icon" />End Time:</label>
              <input type="datetime-local" id="end_time" onChange={(e) => setEndTime(e.target.value)} />
              <label htmlFor="status">Status:</label>
              <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
              <label htmlFor="payment_status">Payment Status:</label>
              <input type="text" id="payment_status" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} />
              <button onClick={handleBooking}>Book</button>
            </div>
          )}

          {!showBookingForm && (
             <button className="booking-button"  onClick={() => setShowBookingForm(true)}>Make a Booking</button>
          )}      
          
        </>
      )}
    </div>
  );
};

export default Adminbooking;
