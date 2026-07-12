

const ProgramCard = ({ image, title, description, reverse }) => {
  return (
    <div className={`program-card ${reverse ? "reverse" : ""}`}>

      <div className="program-image">
        <img src={image} alt={title} />
      </div>

      <div className="program-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default ProgramCard; 