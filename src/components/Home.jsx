import { Link } from 'react-router-dom';
import '../styling/Home.css';
import OfficeImage from '../images/OfficeImage.jpeg';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading">SPACER</h1>
        <br />
        <p className="description">Discover and book unique spaces for any activity</p>
        <img src={OfficeImage} alt="Office Snapshot" className="office-image" />
        <Link to="/login" className="link login-link">Login</Link>
        <Link to="/signup" className="link signup-link">Create account</Link>
      </div>
    </div>
  );
};

export default Home;
