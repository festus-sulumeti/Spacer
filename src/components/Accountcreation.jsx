import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styling/Accountcreation.css';

const AccountCreation = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  });

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
        // fetchUsers();
      } else {
        toast.error(data.message);
      }

      if (response.ok) {
        
        
        toast.success("Successfully signed in", {
          autoClose: 100,
          onClose: () => {
            window.location.href = "Userhomepage";
          },
        });
      } else {
        toast.error("Invalid email or password");
      }

    } catch (error) {
      toast.error("Error Signing up to the system user");
    }
  };

  return (
    <>
    <div className="wrapper">
      <div className="container">
        <h2>Sign Up</h2>
        <br />
        <div className="containerr">
          <div className="content">
            <div className="content__container">
              <p className="content__container__text">
                Hello
              </p>
            
              <ul className="content__container__list">
                <li className="content__container__list__item">welcome</li>
                <li className="content__container__list__item">sign up </li>
                <li className="content__container__list__item">user !</li>
                <li className="content__container__list__item">spacer</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <form onSubmit={handleAddUser}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>

        <br />

        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>

      <ToastContainer />
    </div>
    </>
  );
};

export default AccountCreation;
