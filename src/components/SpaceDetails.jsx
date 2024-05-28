import { useEffect, useState } from "react";
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
      const response = await axios.get(`https://madespacer-2.onrender.com/getspaces/${id}`);
      if (response.data.success) {
        setSpace(response.data.space);
      } else {
        toast.error("Failed to fetch space details");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Failed to fetch space details");
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!space) return;

    try {
      const bookingDetails = {
        user_id: 1, // Replace with actual user ID
        space_id: space.id,
        start_time: new Date().toISOString(), // Replace with actual start time
        end_time: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), // Replace with actual end time
      };

      const response = await axios.post("https://madespacer-2.onrender.com/addbookings", bookingDetails);
      if (response.data.success) {
        toast.success("Booking successful!");
      } else {
        toast.error("Failed to book space");
      }
    } catch (error) {
      toast.error("Failed to book space");
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        space && (
          <div>
            <h1>{space.name}</h1>
            <p>{space.description}</p>
            <p>Location: {space.location}</p>
            <p>Price per hour: ${space.price_per_hour}</p>
            <button onClick={handleBooking}>Book Now</button>
          </div>
        )
      )}
      <ToastContainer />
    </div>
  );
};

export default SpaceDetails;
