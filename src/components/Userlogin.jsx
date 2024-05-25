import { useState } from "react";
import '../styling/Accountcreation.css';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

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
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  console.log("Userlogin component rendered");

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Sign In</h2>
        <br />
        <div className="containerr">
          <div className="content">
            <div className="content__container">
              <p className="content__container__text">
                Hello
              </p>
            
              <ul className="content__container__list">
                <li className="content__container__list__item">welcome</li>
                <li className="content__container__list__item">sign in !</li>
                <li className="content__container__list__item">user !</li>
                <li className="content__container__list__item">spacer</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <br />
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Userlogin;
