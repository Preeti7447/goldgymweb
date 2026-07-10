import "./BrandLogos.css";

import logo1 from "../../assets/GG.webp";
import logo2 from "../../assets/GG-Express.webp";
import logo3 from "../../assets/GG-Activ.webp";

const BrandLogos = () => {
  return (
    <section className="brand-section">
      <div className="brand-container">

        <div className="brand-item">
          <img src={logo1} alt="Gold's Gym" />
        </div>

        <div className="brand-item">
          <img src={logo2} alt="Gold's Gym Express" />
        </div>

        <div className="brand-item">
          <img src={logo3} alt="Activ" />
        </div>

      </div>
    </section>
  );
};

export default BrandLogos;