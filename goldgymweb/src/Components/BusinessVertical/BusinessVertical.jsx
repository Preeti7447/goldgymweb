import "./BusinessVertical.css";
import icon from "../../assets/icon.jpg";

const BusinessVertical = () => {
    return (
        <section className="verticals">

            <h1>Our Business Verticals</h1>

            <div className="sub-vertical">Gold's Gym India business comprises of 2 verticals- Gold's Gym & GGFI</div>

            <div className="cards">

                <div className="card">
                    <img src={icon} alt="icon" />
                    <h2>Gyms</h2>
                    <p>
                        We are one of the largest gym chains in India with 150+ active clubs & have been in India since 2002
                    </p>
                </div>

                <div className="card">
                    <img src={icon} alt="icon" />
                    <h2>GGFI</h2>
                    <p>
                        GGFI opened its doors for all the fitness enthusiasts in 2006 has successfully produced thousands of personal trainers and health coaches.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default BusinessVertical