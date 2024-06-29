// src/components/Login/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRightShort, BsEye, BsEyeSlash } from 'react-icons/bs';
import { MdPerson } from 'react-icons/md';
import { userLogin } from '../../apiService/api'; // Updated import
import './login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        await userLogin({ username, password }); // Use userLogin function from authService
        navigate('/'); // Redirect to home or dashboard
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors({ general: error.response.data.error });
        } else {
          setErrors({ general: 'Invalid credentials' });
        }
      }
    }
  };

  return (
    <section className="login container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Login to Your Account</h2>
          <p>Welcome back! Please enter your details to continue.</p>
        </div>

        <div className="mainContent grid">
          <form data-aos="fade-up" data-aos-duration="3000" className="loginForm" onSubmit={handleLogin}>
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <div className="inputContainer">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
                <MdPerson className="icon" />
                {errors.username && <span className="error">{errors.username}</span>}
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <div className="inputContainer">
                <input
                  type={showPassword ? 'text' : 'password'}
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
            {errors.general && <span className="error">{errors.general}</span>}
            <button className="btn flex" type="submit">
              Login
              <BsArrowRightShort className="icon" />
            </button>
            <p className="signupRedirect">
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
            <button className="backToHome" onClick={() => navigate('/')}>
              <span>&#8592;</span> Back to Home
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
