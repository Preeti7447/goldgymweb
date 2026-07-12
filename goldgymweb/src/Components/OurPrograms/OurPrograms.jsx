import "./OurPrograms.css";
import ProgramCard from "./ProgramCard";

import corporateImg from "../../assets/Corporate-Membership.webp";
import personalImg from "../../assets/Personal.webp";
import groupImg from "../../assets/Group-Program-1.webp";

const OurPrograms = () => {
    return (
        <section className="programs">

            <h1>Our Programs</h1>

            <p className="intro">
                The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.
            </p>

            <ProgramCard
                image={corporateImg}
                title="Corporate Membership"
                description="Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle." />

            <ProgramCard
                image={personalImg}
                title="Personal Training"
                description="Gold's Gym India is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Gold’s Gym India personal training program is for them."
                reverse={true}
            />

            <ProgramCard
                image={groupImg}
                title="Group Program"
                description="Gold's Gym India provides a variety of group fitness programs such as dance fitness, yoga, HIIT, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts."
            />

        </section>
    );
};

export default OurPrograms;