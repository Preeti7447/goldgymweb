import { useNavigate } from "react-router-dom";
import "./BookFreeTrial.css";

const BookFreeTrial = () => {

  const navigate = useNavigate();

  return (
    <section className="signup-container">
       <div className="signup-content">
        <h2 className="signup-title"> Book Your Free Trial </h2>

        <p className="signup-subtitle">
          Start Your Fitness Journey At Gold's Gym Today
        </p>

        <button className="signup-btn" onClick={()=> navigate("/buy-membership-now")}> Sign Me Up </button>
      </div>
    </section>
  )
}

export default BookFreeTrial