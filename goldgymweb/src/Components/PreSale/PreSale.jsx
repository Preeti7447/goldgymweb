import "./PreSale.css";
import bgImage from "../../assets/Background-presale.jpg";
import comingSoon from "../../assets/coming-soon.png";

const PreSale = () => {
  return (
    <section
      className="presale-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">

        <h3 className="small-heading">
          Pre <span>Sale</span>
        </h3>

        <h1 className="main-heading">
          GYMS COMING <span>SOON</span>
        </h1>

        <div className="content">

          <div className="left">

            <h2>GYMS COMING SOON :</h2>

            <ul>
              <li><i className="bi bi-geo-alt-fill"></i>Gold's Gym Mohali Punjab</li>
              <li><i className="bi bi-geo-alt-fill"></i>Gold's Gym MIT Kothrud Pune</li>
            </ul>

          </div>

          <div className="right">
            <img src={comingSoon} alt="Coming Soon" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PreSale;