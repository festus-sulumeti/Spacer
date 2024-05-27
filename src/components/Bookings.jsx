import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "../styling/Bookings.css";
import "../styling/Cat.css"

const Bookings = () => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [callbackUrl, setCallbackUrl] = useState("");
  const [accountRef, setAccountRef] = useState("");
  const [description, setDescription] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const handlePayment = async () => {
    setShowLoader(true);
    try {
      const response = await axios.post(
        "https://madespacer-1.onrender.com/make_payment",
        {
          phone_number: phone,
          amount: amount,
          callback_url: callbackUrl,
          account_ref: accountRef,
          description: description
        }
      );
      toast.success("Payment successful");
    } catch (error) {
      toast.error("Failed to make payment");
    } finally {
      setShowLoader(false);
    }
  };

  const handleBackClick = () => {
    window.location.href = "/Userhomepage";
  };

  return (

    <>

      <div className="back-arrow" onClick={handleBackClick}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
      </div>
      
      <div className="loader">
            <div className="wrappering">
                <div className="catContainer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 733 673"
                    className="catbody"
                >
                    <path
                    fill="#212121"
                    d="M111.002 139.5C270.502 -24.5001 471.503 2.4997 621.002 139.5C770.501 276.5 768.504 627.5 621.002 649.5C473.5 671.5 246 687.5 111.002 649.5C-23.9964 611.5 -48.4982 303.5 111.002 139.5Z"
                    ></path>
                    <path fill="#212121" d="M184 9L270.603 159H97.3975L184 9Z"></path>
                    <path fill="#212121" d="M541 0L627.603 150H454.397L541 0Z"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 158 564"
                    className="tail"
                >
                    <path
                    fill="#191919"
                    d="M5.97602 76.066C-11.1099 41.6747 12.9018 0 51.3036 0V0C71.5336 0 89.8636 12.2558 97.2565 31.0866C173.697 225.792 180.478 345.852 97.0691 536.666C89.7636 553.378 73.0672 564 54.8273 564V564C16.9427 564 -5.4224 521.149 13.0712 488.085C90.2225 350.15 87.9612 241.089 5.97602 76.066Z"
                    ></path>
                </svg>
                <div className="text">
                    <span className="bigzzz">Z</span>
                    <span className="zzz">Z</span>
                </div>
                </div>
                <div className="wallContainer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 500 126"
                    className="wall"
                >
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="3"
                    x2="450"
                    y1="3"
                    x1="50"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="85"
                    x2="400"
                    y1="85"
                    x1="100"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="122"
                    x2="375"
                    y1="122"
                    x1="125"
                    ></line>
                    <line strokeWidth="6" stroke="#7C7C7C" y2="43" x2="500" y1="43"></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="1.99391"
                    x2="115.5"
                    y1="43.0061"
                    x1="115.5"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.00002"
                    x2="189"
                    y1="43.0122"
                    x1="189"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.00612"
                    x2="262.5"
                    y1="43.0183"
                    x1="262.5"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.01222"
                    x2="336"
                    y1="43.0244"
                    x1="336"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="2.01833"
                    x2="409.5"
                    y1="43.0305"
                    x1="409.5"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="153"
                    y1="84.0122"
                    x1="153"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="228"
                    y1="84.0122"
                    x1="228"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="303"
                    y1="84.0122"
                    x1="303"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="43"
                    x2="378"
                    y1="84.0122"
                    x1="378"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="84"
                    x2="192"
                    y1="125.012"
                    x1="192"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="84"
                    x2="267"
                    y1="125.012"
                    x1="267"
                    ></line>
                    <line
                    strokeWidth="6"
                    stroke="#7C7C7C"
                    y2="84"
                    x2="342"
                    y1="125.012"
                    x1="342"
                    ></line>
                </svg>
                </div>
            </div>
          </div>

      <div className="payment-container">

            
        <h1>Make Payment</h1>
        <div className="payment-form">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="amount">Amount:</label>
          <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <label htmlFor="callbackUrl">Callback URL:</label>
          <input type="text" id="callbackUrl" value={callbackUrl} onChange={(e) => setCallbackUrl(e.target.value)} />
          <label htmlFor="accountRef">Account Reference:</label>
          <input type="text" id="accountRef" value={accountRef} onChange={(e) => setAccountRef(e.target.value)} />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handlePayment}>Make Payment</button>
        </div>

      </div>
    </>
  
  );
};

export default Bookings;