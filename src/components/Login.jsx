import { Link } from "react-router-dom";
import '../styling/Home.css';

const Login = () => {
  console.log("Login component rendered");
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading">Welcome to Our Platform!</h1>
        <br />
        <p className="description">Unlock exclusive features by signing in.</p>
        <Link to="/userlogin" className="link login-link">User Login</Link>
        <Link to="/adminlogin" className="link signup-link">Admin Login</Link>
      </div>
    </div>
  );
};

export default Login;
