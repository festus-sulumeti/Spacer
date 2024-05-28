import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styling/Adminhomepage.css";
import NavbarAdmin from "./NavbarAdmin";

const Adminhomepage = () => {
  const [spaces, setSpaces] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newSpace, setNewSpace] = useState({
    name: "",
    description: "",
    location: "",
    price_per_hour: "",
    owner_id: ""
  });
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    fetchSpaces();
    fetchUsers();
    fetchBookings();
  }, []);

  const fetchSpaces = async () => {
    try {
      const response = await fetch("https://madespacer-2.onrender.com/getspaces");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched spaces:', data);
      setSpaces(data.spaces);
    } catch (error) {
      console.error('Error fetching spaces:', error);
      toast.error("Error fetching spaces");
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://madespacer-2.onrender.com/getusers");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched users:', data);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error("Error fetching users");
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch("https://madespacer-2.onrender.com/getbookings");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched bookings:', data);
      setBookings(data.bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error("Error fetching bookings");
    }
  };

  const handleAddSpace = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://madespacer-2.onrender.com/addspaces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newSpace)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Added space:', data);
      if (data.success) {
        toast.success(data.message);
        fetchSpaces();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error adding space:', error);
      toast.error("Error adding space");
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://madespacer-2.onrender.com/addusers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Added user:', data);
      if (data.success) {
        toast.success(data.message);
        fetchUsers();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error("Error adding user");
    }
  };

  return (
    <div className="admin-homepage-wrapper">
      <NavbarAdmin />
      <div className="admin-homepage">
        <div>
          <h1><strong>Admin Dashboard</strong></h1>
        </div>
        <div className="flex-container">
          <div className="section">
            <h2>View All Users</h2>
            <div className="list-container">
              {users.map((user) => (
                <div key={user.id} className="user-item">
                  <h3>{user.username}</h3>
                  <p>{user.email}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2>Add New User</h2>
            <form onSubmit={handleAddUser}>
              <input
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
              <button type="submit">Add User</button>
            </form>
          </div>
        </div>
        <div className="flex-container">
          <div className="section">
            <h2>View All Spaces</h2>
            <div className="list-container">
              {spaces.map((space) => (
                <div key={space.id} className="space-item">
                  <h3>{space.name}</h3>
                  <p>{space.description}</p>
                  <p><strong>Location:</strong> {space.location}</p>
                  <p><strong>Price:</strong> ${space.price_per_hour} per hour</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2>Add New Space</h2>
            <form onSubmit={handleAddSpace}>
              <input
                type="text"
                placeholder="Name"
                value={newSpace.name}
                onChange={(e) => setNewSpace({ ...newSpace, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description"
                value={newSpace.description}
                onChange={(e) => setNewSpace({ ...newSpace, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                value={newSpace.location}
                onChange={(e) => setNewSpace({ ...newSpace, location: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price per hour"
                value={newSpace.price_per_hour}
                onChange={(e) => setNewSpace({ ...newSpace, price_per_hour: e.target.value })}
              />
              <input
                type="text"
                placeholder="Owner ID"
                value={newSpace.owner_id}
                onChange={(e) => setNewSpace({ ...newSpace, owner_id: e.target.value })}
              />
              <button type="submit">Add Space</button>
            </form>
          </div>
        </div>
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Adminhomepage;
