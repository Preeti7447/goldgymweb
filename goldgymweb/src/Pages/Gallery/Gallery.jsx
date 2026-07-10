import { useState } from "react";
import "./Gallery.css";

import galleryData from "./galleryData";

const Gallery = () => {

    const [category, setCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    let filteredData;

    if (category === "all") {
        filteredData = galleryData;
    }
    else if (category === "image") {
        filteredData = galleryData.filter(item => item.type === "image");
    }
    else {
        filteredData = galleryData.filter(item => item.type === "video");
    }

    return (
        <>
            <div className="gallery-banner">
                <div className="overlay-gallery">
                    <h1><span>GALL</span>ERY</h1>
                </div>
            </div>
            <div className="gallery-buttons">
                <button onClick={() => setCategory("all")}>
                    All
                </button>
                <button onClick={() => setCategory("image")}>
                    Images
                </button>
                <button onClick={() => setCategory("video")}>
                    Videos
                </button>
            </div>

            <div className="gallery-grid">
                {
                    filteredData.map((item) => (
                        <div className="gallery-card" key={item.id}>
                        { item.type === "image" ? <img src={item.src} alt="" onClick={() =>{ setSelectedImage(item.src); window.location.hash = `img${item.id}`;}} /> : <iframe src={item.src} title="Youtube Video" onClick={() => { setSelectedVideo(item.src);  window.location.hash = "Vedio";}} allowFullScreen></iframe> }
                        </div>
                    ))
                }
            </div>

            {
                selectedImage && (
                    <div className="popup" onClick={() => setSelectedImage(null)} >
                        <img src={selectedImage} alt="" onClick={(e) => e.stopPropagation()} />

                        <button className="close-btn" onClick={() => setSelectedImage(null)} >
                            ✖
                        </button>
                    </div>
                )
            }

            {
                selectedVideo && (
                    <div className="popup" onClick={() => { setSelectedVideo(null)}}>
                        <div className="video-popup" onClick={(e) => e.stopPropagation()}>
                            <iframe src={selectedVideo} title="youtube" allowFullScreen></iframe>

                            <button className="close-btn" onClick={() => setSelectedVideo(null)}>
                             ✖
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Gallery;