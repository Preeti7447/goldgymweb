// import React from 'react';
import "./Carousel.css";
import img1 from "../../assets/img-1.webp";
import img2 from "../../assets/img-2.webp";
import img3 from "../../assets/img-3.webp";


const Carousel = () => {
    return (
        <div id="gymCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img
                        src={img1}
                        className="d-block w-100 carousel-img"
                        alt="Slide 1"
                        
                    />
                </div>

                <div className="carousel-item" data-bs-interval="3000">
                    <img
                        src={img2}
                        className="d-block w-100 carousel-img"
                        alt="Slide 2"
                       
                    />
                </div>

                <div className="carousel-item" data-bs-interval="3000">
                    <img
                        src={img3}
                        className="d-block w-100 carousel-img"
                        alt="Slide 3"
                       
                    />
                </div>
            </div>

            <button type="button"
                className="carousel-control-prev" data-bs-target="#gymCarousel" data-bs-slide="prev">
                {/* <span className="carousel-control-prev-icon"></span> */}
                 <i className="bi bi-chevron-left custom-arrow"></i>
            </button>

            <button type="button"
                className="carousel-control-next" data-bs-target="#gymCarousel" data-bs-slide="next">
                {/* <span className="carousel-control-next-icon"></span> */}
                 <i className="bi bi-chevron-right custom-arrow"></i>
            </button>
        </div>
    )
}

export default Carousel
