import "./Testimonials.css";
import bg from "../../assets/Testimonials-bg.jpg";

const Testimonials = () => {
    return (
        <section
            className="testimonials"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="testimonial-overlay">

                <h2 className="testimonial-title">Testimonials</h2>

                <div
                    id="testimonialCarousel"
                    className="carousel slide"

                    data-bs-ride="false"
                    data-bs-touch="true"
                    data-bs-keyboard="true"
                >

                    <div className="carousel-indicators">

                        <button
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide-to="0"
                            className="active"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide-to="1"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide-to="2"
                        ></button>

                    </div>

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="testimonial-card">
                                <p>
                                    It's a very nice gym with world top class equipment of Life fitness and Hammer Strength, and people
                                    surrounding is also good, and staff of this branch is very kind, they help members very well and all the trainers
                                    are certified with good knowledge of teaching as well. Good place to achieve your goals.
                                </p>

                                <h6>Mayur Abnave</h6>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="testimonial-card">
                                <p>
                                    So this place is more than just a gym. You can walk in and make friends that will guide you and help you out
                                    each time. They have great programs such as kickboxing, yoga, Zumba etc that you can opt for to change the
                                    routine once in a while. They have dedicated cardio and spinning sections with mood lighting and good
                                    instructors. The staff is humble and helpful whenever approached.
                                </p>

                                <h6>Utkrisht Kaushik</h6>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="testimonial-card">
                                <p>
                                    Amazing staff .!!! Hygiene is always a priority here. There are lockers to keep our bags. The personal trainers are
                                    extremely helpful. I have been training under Pranay Bane and sir has been most motivating.
                                </p>

                                <h6>Natasha Mondegari</h6>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Testimonials;