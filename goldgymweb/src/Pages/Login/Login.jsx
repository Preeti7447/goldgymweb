import { Link } from "react-router-dom";
import { useState } from "react";
import "./Sign-up-in.css";

import logo from "../../assets/logo.webp";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="auth-page">

            <img src={logo} alt="" className="logo-img" />

            <div className="auth-card">
                <h1>Sign In</h1>

                <form>
                    <div className="mb-4">
                        <label>Email</label>
                        <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-4 password-box">
                        <label>Password</label>
                        <input type={showPassword ? "text" : "password"} className="form-control" />

                        <i
                            className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"
                                } eye`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>

                    </div>
                    <div className="remember-box">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="remember" />
                            <label className="form-check-label" htmlFor="remember">
                                Remember me
                            </label>
                        </div>

                        <a href="#">Forgot password?</a>
                    </div>

                    <button className="btn btn-secondary w-100 auth-btn">
                        SIGN IN
                    </button>

                </form>

            </div>

            <div className="bottom-text">
                <p>Don't have an account?</p>
                <Link to="/register">Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;