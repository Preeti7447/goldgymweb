import "./Institute.css";
import CourseCard from "./CourseCard";
import bg from "../../assets/GoldsGymFitnessInstitute.jpg";


import online from "../../assets/GGFI-Online.webp";
import offline from "../../assets/GGFI-Offline.webp";
import ace from "../../assets/GGFI-ACE.webp";
import shortCourse from "../../assets/GGFI-Short-courses.webp";

const courses = [

    {
        id: 1,
        image: online,
        title: "GGFI Online"
    },

    {
        id: 2,
        image: offline,
        title: "GGFI Offline"
    },

    {
        id: 3,
        image: ace,
        title: "ACE"
    },

    {
        id: 4,
        image: shortCourse,
        title: "Short Courses"
    }

];

const Institute = () => {

    return (

        <section
            className="institute"
            style={{ backgroundImage: `url(${bg})` }}
        >

            <div className="container">

                <h1 className="main-title">
                    Gold's Gym
                    <span> Fitness Institute</span>
                </h1>

                <div className="sub-title">
                    Become a Certified Fitness Professional Today
                </div>

                <p className="description">
                    Physical Activity Or Can Improve Your Health
                </p>

                <div className="row g-4 mt-3">
                    {
                        courses.map((course) => (
                            <div className="col-lg-3 col-md-6" key={course.id}>
                                <CourseCard {...course} />
                            </div>
                        ))
                    }
                </div>

                <div className="text-center mt-5">
                    <button className="know-btn">
                        Know More
                    </button>
                </div>
            </div>

        </section>

    );
};

export default Institute;