import { useNavigate } from "react-router-dom";
import "./Membership.css";

const Membership = () => {

    const navigate = useNavigate();

    return (
        <section className="membership-section">
            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-8 text-center text-lg-start">

                        <h2 className="membership-title">
                            Buy a Gold's Gym Membership Today.
                        </h2>

                        <p className="membership-subtitle">
                            Start Your Fitness Journey Today!
                        </p>

                    </div>

                    <div className="col-lg-4 text-center text-lg-end">

                        <button className="membership-trial-btn" onClick={() => navigate("/buy-membership-now")}>
                            Book Your Free Trial
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Membership;