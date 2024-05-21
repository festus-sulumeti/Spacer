import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styling/Adminhomepage.css";

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchSpaces();
    fetchUsers();
    fetchBookings();
  }, []);

  const fetchSpaces = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/spaces");
      const data = await response.json();
      setSpaces(data.spaces);
    } catch (error) {
      toast.error("Error fetching spaces");
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      toast.error("Error fetching users");
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

  const handleAddSpace = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/spaces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newSpace)
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        fetchSpaces();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error adding space");
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        fetchUsers();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error adding user");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/adminlogout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        // Redirect to the login page  <a href="about.html">about us</a>
        window.location.href = "/login"; // Update this with your login page route
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error during logout");
    }
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div className="admin-homepage">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      {/* <div className="user-profile">
        <div className={`user-icon ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
          <i className="uil uil-user-circle"></i>
          <i className={`uil uil-angle-down dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`}></i>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-option" onClick={() => console.log('View Profile')}>
              <i className="uil uil-user"></i>
              <span>View Profile</span>
            </div>
            <div className="dropdown-option" onClick={() => console.log('Settings')}>
              <i className="uil uil-cog"></i>
              <span>Settings</span>
            </div>
            <div className="dropdown-option" onClick={() => console.log('Help')}>
              <i className="uil uil-question-circle"></i>
              <span>Help</span>
            </div>
            <div className="dropdown-option" onClick={handleLogout}>
              <i className="uil uil-sign-out-alt"></i>
              <span>Logout</span>
            </div>
          </div>
        )}
      </div> */}

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
  );
};

export default Adminhomepage;
