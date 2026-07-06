import "./Features.css";

import bgImage from "../../assets/f-1.jpg";

import gym from "../../assets/156-Gyms.webp";
import city from "../../assets/95-Cities.webp";
import india from "../../assets/26-States-1.webp";
import training from "../../assets/Personal-Training.webp";
import corporate from "../../assets/Corporate-Wellness-Program.webp";
import group from "../../assets/Group-Program.webp";
import travel from "../../assets/Travel-Pass.webp";

function Features() {

  const featuresData = [
    {
      image: gym,
      title: "156 Gyms"
    },
    {
      image: city,
      title: "95 Cities"
    },
    {
      image: india,
      title: "26 States"
    },
    {
      image: training,
      title: "Personal Training Program"
    },
    {
      image: corporate,
      title: "Corporate Wellness Program"
    },
    {
      image: group,
      title: "Group Exercise Program"
    },
    {
      image: travel,
      title: "Domestic & International Travel Pass"
    }
  ];

  return (
    <section
      className="features-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="features-title">
        What Makes Us
        <br />
        Different Than Others
      </h2>

      <div className="features-container">

        {featuresData.map((item) => (
          <div className="feature-card" key={item.title}>
            <img
              src={item.image}
              alt={item.title}
            />
            <h3>{item.title}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;