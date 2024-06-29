import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsEye, BsEyeSlash } from "react-icons/bs";
import { MdEmail, MdPerson } from "react-icons/md";
import { getUser, updateUser } from "../../apiService/api";
import "./profile.scss";

const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming the token is stored in localStorage
        const token = localStorage.getItem('token');
        const response = await getUser(token);
        setUserData({
          username: response.username,
          email: response.email,
          fullName: response.fullName,
          profileImage: response.profileImage,
          password: "",
          confirmPassword: ""
        });
        setImagePreview(`http://localhost:8000${response.profileImage}`);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, profileImage: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!userData.email) newErrors.email = "Email is required";
    if (userData.password && userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const formData = new FormData();
        formData.append("username", userData.username);
        formData.append("email", userData.email);
        if (userData.password) formData.append("password", userData.password);
        if (userData.profileImage) formData.append("profileImage", userData.profileImage);

        // Assuming the token is stored in localStorage
        const token = localStorage.getItem('token');

        await updateUser(formData, token);
        setIsEditing(false);
        navigate("/");
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors({ general: error.response.data.error });
        } else {
          setErrors({ general: "Error occurred during profile update" });
        }
      }
    }
  };
  return (
    <section className="profile container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Your Profile</h2>
        </div>

        <div className="mainContent grid">
          <div className="profileHeader">
            {imagePreview && <img src={imagePreview} alt="Profile" className="avatar" />}
            <div className="profileData">
              <label className="profileLabel">Full Name:</label>
              <h3>{userData.username}</h3>
              <label className="profileLabel">Email:</label>
              <p>{userData.email}</p>
            </div>
          </div>

          {isEditing ? (
            <form data-aos="fade-up" data-aos-duration="3000" className="profileForm" onSubmit={handleUpdate}>
              <div className="formGroup">
                <label htmlFor="fullName">Full Name</label>
                <div className="inputContainer">
                  <input
                    type="text"
                    id="fullName"
                    value={userData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  <MdPerson className="icon" />
                  {errors.username && <span className="error">{errors.fullName}</span>}
                </div>
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <div className="inputContainer">
                  <input
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  <MdEmail className="icon" />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>
              <div className="formGroup">
                <label htmlFor="password">New Password (leave blank to keep current password)</label>
                <div className="inputContainer">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
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
                    value={userData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                  />
                  <div className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                  {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
              </div>
              <div className="formGroup">
                <label htmlFor="profileImage">Profile Image</label>
                <div className="inputContainer">
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {imagePreview && <img src={imagePreview} alt="Profile Preview" className="imagePreview" />}
                </div>
              </div>
              {errors.general && <span className="error">{errors.general}</span>}
              <button className="btn flex" type="submit">
                Save
                <BsArrowRightShort className="icon" />
              </button>
            </form>
          ) : (
            <button className="btn flex" onClick={() => setIsEditing(true)}>
              Edit Profile
              <BsArrowRightShort className="icon" />
            </button>
          )}
          <button className="backToHome" onClick={() => navigate("/")}>
            <span>&#8592;</span> Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
