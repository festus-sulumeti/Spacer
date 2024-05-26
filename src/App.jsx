import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AccountCreation from "./components/Accountcreation";
import Userlogin from "./components/Userlogin";
import Userhomepage from "./components/Userhomepage";
import Adminlogin from "./components/Adminlogin";
import Adminhomepage from "./components/Adminhomepage";
import SpaceDetails from "./components/SpaceDetails";
import Bookings from "./components/Bookings";
import Adminbooking from "./components/Adminbooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<AccountCreation />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/Userhomepage" element={<Userhomepage />} />
        <Route path="/Adminhomepage" element={<Adminhomepage/>} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/adminbooking" element={<Adminbooking />} />
        <Route path="/space/:id" component={SpaceDetails} />
      </Routes>
    </Router>
  );
}

export default App;
