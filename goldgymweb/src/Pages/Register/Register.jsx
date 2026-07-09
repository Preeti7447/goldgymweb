import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Login/Sign-up-in.css";
import logo from "../../assets/logo.webp";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="auth-page">

      <img src={logo} alt="" className="logo-img" />

      <div className="auth-card">
        <h1>Sign Up</h1>

        <form>
          <div className="mb-4">
            <label>Email</label>

            <input type="email" required className="form-control"/>
          </div>

          <div className="mb-4">
            <label>Name</label>

            <input type="text" required className="form-control"/>

          </div>

          <div className="mb-4 password-box">

            <label>Password</label>
            <input type={showPassword ? "text" : "password"} required className="form-control" />

            <i className={`bi ${ showPassword ? "bi-eye-slash" : "bi-eye" } eye`}
               onClick={() => setShowPassword(!showPassword)}
            ></i>

          </div>

          <button className="btn btn-secondary w-100 auth-btn" onClick={()=> navigate("/login")}>
            SIGN UP 
          </button>

        </form>

      </div>

      <div className="bottom-text">
        <p>Already have an account?</p>
        <Link to="/login">Sign in</Link>
      </div>

      <p className="policy">
        By signing up you agree to the Rules and Privacy Policy.
      </p>

    </div>
  );
};

export default Register;