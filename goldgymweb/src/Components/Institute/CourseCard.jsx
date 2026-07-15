import "./Institute.css";

const CourseCard = ({ image, title }) => {
  return (
    <div className="course-card">

      <img src={image} alt={title} />
      <h4>{title}</h4>

    </div>
  );
};

export default CourseCard;