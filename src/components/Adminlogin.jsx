import { useState  } from "react";
import '../styling/Accountcreation.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "./AuthContext";

const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/adminlogin", {
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
            window.location.href = "Adminhomepage";
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
    <div className="wrapper2">
      <div className="container">
        <h2>Sign In</h2>
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Adminlogin;
