import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Userhomepage = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpaces();
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
      <ToastContainer />
    </div>
  );
};

export default Userhomepage;
