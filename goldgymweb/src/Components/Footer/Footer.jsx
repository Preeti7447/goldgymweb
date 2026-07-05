import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = () => {
    return (

        <footer className="footer">
            <div className="empty">

            </div>
            <div className="footer-overlay">

                <div className="footer-wrapper">

                    {/* Left Side */}
                    <div className="quick-links">
                        <h2>QUICK LINKS</h2>

                        <div className="links-grid">
                            <ul>
                                <li>Gym Locator</li>
                                <li>About us</li>
                                <li>Become an</li>
                                <li>Influencer with Us</li>
                                <li>Careers</li>
                                <li>Testimonials</li>
                                <li>Press Room</li>
                                <li>Our Events</li>
                                <li>Group Program</li>
                            </ul>

                            <ul>
                                <li>Blogs</li>
                                <li>Corporate Wellness</li>
                                <li>Program</li>
                                <li>Gallery</li>
                                <li>Franchise</li>
                                <li>GGFI</li>
                                <li>Advertise with us</li>
                                <li>Buy Membership Now</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>

                    
                    <div className="newsletter">
                        <h2>NEWS LETTER</h2>
                        <p>
                            Sign up for our mailing list to get latest  updates and offers
                        </p>

                        <input type="email" placeholder="Enter Email" />

                        <button>SUBSCRIBE NOW</button>
                        <div className="social">
                            <SocialMedia />
                        </div>
                    </div>

                    
                    <div className="latest-blog">
                        <h2>LATEST BLOG</h2>
                        <div className="blog">
                            <div className="blog-item">
                                The Science of the “Second Half”: Why Recovery Is the Real Competitive Edge in Professional Sports
                            </div>

                            <div className="blog-item">
                                Evidence-Based Approaches to Improve Nutrition Without Calorie Counting
                            </div>

                            <div className="blog-item">
                                Gold's Gym Shillong Blog
                            </div>
                        </div>
                    </div>

                </div>

                <div className="copyright">
                    <p>©2026 Gold's Gym. All Rights Reserved.</p>

                    <div>
                        Terms & Conditions |
                        Privacy Policy
                    </div>
                </div>

                <div className="related-searches">
                    <h3>Related Searches:</h3>
                    <p>Gym Near Me, Gold’s Gym Mumbai Bandra, Corporate Wellness Program, Personal Training Program, Gym Memberships Near Me, Fitness Near Me, Golds Gym Near Me, Personal Training Near Me, Gyms In Pune Kalyani Nagar, Gyms In Bengaluru RR Nagar, Gyms In Delhi Greater Kailash, Gym Workout Routine, Weight Training for Weight Loss </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer