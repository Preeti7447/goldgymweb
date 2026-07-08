import "./OurLegacy.css";

const OurLegacy = () => {
    return (

        <section className="legacy-section">
            <h2 className="legacy-title">Our Legacy</h2>

            <div className="legacy-container">
                <div className="legacy-video">
                    <iframe
                        src="https://www.youtube.com/embed/R9Q13UJU7P0"
                        title="Gold's Gym Legacy"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="legacy-content">
                    <p>Gold's Gym is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 1965 in Venice Beach, California, Gold's Gym has become synonymous with fitness excellence and innovation. Gold’s Gym India carries the legacy ahead in the home country since its inception in 2002. World-class fitness facilities and a comprehensive range of workout programs tailored to meet the needs of diverse fitness enthusiasts is what sets us apart from others.<br />
                        Gold's Gym India, a part of this esteemed legacy, has expanded its presence across various cities, aiming to empower individuals to achieve their fitness goals, regardless of their fitness levels or aspirations. It's a fitness haven that combines state-of-the-art equipment, expert trainers, and a supportive community to foster a holistic approach to wellness.</p>
                </div>
            </div>
        </section>

    )
}

export default OurLegacy