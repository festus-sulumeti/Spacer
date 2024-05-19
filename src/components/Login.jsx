// src/components/Home.jsx
import { Link } from "react-router-dom";
import '../styling/Home.css';

const Login = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading"> Welcome to Our Platform! </h1>
        <br />
        <p className="description">Unlock exclusive features by signing in.</p>
       
        <Link to="/login" className="link login-link">User Login</Link>
        <a href="#" className="link signup-link">Admin Login</a>
      </div>
    </div>
  );
};

export default Login;
