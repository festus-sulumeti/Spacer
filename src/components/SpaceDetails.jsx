import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpaceDetails = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpaceDetails();
  }, [id]);

  const fetchSpaceDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/spaces/${id}`);
      setSpace(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to fetch space details");
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    try {
      // Assuming the user ID and other booking details are hardcoded for this example
      const bookingDetails = {
        user_id: 1,
        space_id: space.id,
        start_time: new Date().toISOString(), // Replace with actual start time
        end_time: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), // Replace with actual end time
      };

      await axios.post("http://localhost:5000/bookings", bookingDetails);
      toast.success("Booking successful!");
    } catch (error) {
      toast.error("Failed to book space");
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{space.name}</h1>
          <p>{space.description}</p>
          <p>Location: {space.location}</p>
          <p>Price per hour: ${space.price_per_hour}</p>
          <button onClick={handleBooking}>Book Now</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SpaceDetails;
