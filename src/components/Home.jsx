import { Link } from "react-router-dom";
import '../styling/Home.css';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading">SPACER</h1>
        <br />
        <p className="description">Discover and book unique spaces for any activity</p>
        <Link to="/login" className="link login-link">Login</Link>
        <Link to="/signup" className="link signup-link">Create account</Link>
      </div>
    </div>
  );
};

export default Home;
