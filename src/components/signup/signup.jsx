import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsEye, BsEyeSlash } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { register } from '../../apiService/api';
import './signup.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    if (!fullName) newErrors.fullName = "Full name is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        await register({
          username: fullName,
          email,
          password,
          password2: confirmPassword
        });
        navigate('/login'); // Redirect to login page
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors({ general: error.response.data.error });
        } else {
          setErrors({ general: 'Error occurred during signup' });
        }
      }
    }
  };

  return (
    <section className="signup container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Create an Account</h2>
          <p>Join us and start your journey with exclusive offers and features!</p>
        </div>

        <div className="mainContent grid">
          <form data-aos="fade-up" data-aos-duration="3000" className="signupForm" onSubmit={handleSignup}>
            <div className="formGroup">
              <label htmlFor="fullName">Full Name</label>
              <div className="inputContainer">
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <div className="inputContainer">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <MdEmail className="icon" />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <div className="inputContainer">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <div className="icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </div>
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="inputContainer">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                />
                <div className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <BsEye /> : <BsEyeSlash />}
                </div>
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </div>
            </div>
            {errors.general && <span className="error">{errors.general}</span>}
            <button className="btn flex" type="submit">
              Signup
              <BsArrowRightShort className="icon" />
            </button>
            <p className="loginRedirect">
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <button className="backToHome" onClick={() => navigate("/")}>
              <span>&#8592;</span> Back to Home
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
