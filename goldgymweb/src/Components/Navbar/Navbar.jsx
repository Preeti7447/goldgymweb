
// import Navbar from "./Components/Navbar/Navbar";
// import Navbar from "./Navbar";
import "./Navbar.css";
import logo from "../../assets/logo.webp";

const Navbar= () => {
    return (
        <>
            <div className='top-header'>
                <div className='email'>
                    customer.care@goldsgym.in
                </div>
                <div className='welcome'>
                    Welcome to Gold's Gym India.
                </div>
                <div className='social-media'>
                    <a
                        href="https://www.facebook.com/GoldsGymIndia"
                        target="_blank"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a
                        href="https://x.com/GoldsGymIndia"
                        target="_blank"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCCPNLx0irb9sbFdsdTCV6rg"
                        target="_blank"
                    >
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/goldsgymindia"
                        target="_blank"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/gold-s-gym-india/"
                        target="_blank"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
            <nav className="navbar">
                <div className="logo">
                    <img
                        src={logo}
                        alt="logo_img"
                    /> 
                </div>
                 
                <ul className="nav-links">
                    <li className="dropdown">
                        <a href="#" className="text-dark" data-bs-toggle="dropdown">
                            Get Started
                            <i className="bi bi-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Our Gyms India</a></li>
                            <li><a className="dropdown-item" href="#">Our Gyms Nepal</a></li>
                            <li><a className="dropdown-item" href="#">Our Gyms Bagladesh</a></li>
                            <li><a className="dropdown-item" href="#">Buy Membership Now</a></li>
                            <li><a className="dropdown-item" href="#">Blogs</a></li>
                            <li><a className="dropdown-item" href="#">Our Events</a></li>
                            <li><a className="dropdown-item" href="#">Coming Soon</a></li>
                            <li><a className="dropdown-item" href="#">Pre Sale</a></li>
                            <li><a className="dropdown-item" href="#">Newsletter</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#" className="text-dark" data-bs-toggle="dropdown"  >
                            Fitness Institute – GGFI
                            <i className="bi bi-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">GGFI About Us</a></li>
                            <li><a className="dropdown-item" href="#">Our Locations Across India</a></li>
                            <li><a className="dropdown-item" href="#">Our Faculty</a></li>
                            <li><a className="dropdown-item" href="#">Certification & Accreditations</a></li>
                            <li><a className="dropdown-item" href="#">Courses Offered</a></li>
                            <li><a className="dropdown-item" href="#">Buy a Course</a></li>
                            <li><a className="dropdown-item" href="#">Book a Demo Class</a></li>
                            <li><a className="dropdown-item" href="#">Our Affiliate Program</a></li>
                            <li><a className="dropdown-item" href="#">Certificate Verification</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            Gallery
                        </a>
                    </li>

                    <li className="dropdown">
                        <a href="#" className="text-dark" data-bs-toggle="dropdown">
                            Programs
                            <i className="bi bi-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Corporate Membership</a></li>
                            <li><a className="dropdown-item" href="#">Personal Training Program</a></li>
                            <li><a className="dropdown-item" href="#">Group Program</a></li>
                            <li><a className="dropdown-item" href="#">Corporate Wellness Program</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#" className="text-dark" data-bs-toggle="dropdown">
                            Franchise
                            <i className="bi bi-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Qwn a Gold's Gym Franchise</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            Associations, Alliances & Advertising
                        </a>
                    </li>

                    <li className="dropdown">
                        <a href="#" className="text-dark" data-bs-toggle="dropdown">
                            Convention
                            <i className="bi bi-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Bankok 2023</a></li>
                            <li><a className="dropdown-item" href="#">Dubai 2022</a></li>
                            <li><a className="dropdown-item" href="#">Kuala Lampur 2019</a></li>
                            <li><a className="dropdown-item" href="#">Kochi 2018</a></li>
                        </ul>
                    </li>
                </ul>

                <button className="trial-btn">
                    Free Trial
                </button>
            </nav>
            <div className="empty">

            </div>

        </>
    )
}
export default Navbar;

