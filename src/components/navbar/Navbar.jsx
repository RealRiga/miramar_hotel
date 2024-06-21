import React, { useContext, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/auth/authContext";
import "./navbar.scss";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const [active, setActive] = useState("navBar");
  const [show, setShow] = useState(true);
  const showNav = () => setActive("navBar activeNavbar");
  const removeNav = () => setActive("navBar");

  // Background color based on scroll or route
  const [transparent, setTransparent] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10 || location.pathname !== "/") {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addBg);
    if (!localStorage.getItem("token")) {
      setShow(false);
    }
    return () => window.removeEventListener("scroll", addBg);
  }, [location.pathname]);

  // Manage active link state
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    removeNav();
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setIsLoggedIn(false);
    toast.success("Logged out successfully", { autoClose: 2000 });
  };

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1 className="flex">
              <RiHotelFill className="icon" />
              Miramar
              <span className="">Hotel</span>
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink
                to="/"
                className={`navLink ${
                  activeLink === "Home" ? "activeLink" : ""
                }`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/about"
                className={`navLink ${
                  activeLink === "About" ? "activeLink" : ""
                }`}
                onClick={() => handleLinkClick("About")}
              >
                About
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink
                to="/rooms"
                className={`navLink ${
                  activeLink === "Rooms" ? "activeLink" : ""
                }`}
                onClick={() => handleLinkClick("Rooms")}
              >
                Rooms
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/restobar"
                className={`navLink ${
                  activeLink === "Resto&Bar" ? "activeLink" : ""
                }`}
                onClick={() => handleLinkClick("Resto&Bar")}
              >
                Resto & Bar
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink
                to="/contact"
                className={`navLink ${
                  activeLink === "Contact" ? "activeLink" : ""
                }`}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/blog"
                className={`navLink ${
                  activeLink === "Blog" ? "activeLink" : ""
                }`}
                onClick={() => handleLinkClick("Blog")}
              >
                Blog
              </NavLink>
            </li>
            <div className="headerBtns">
              {!show && (
                <>
                  <button className="btn loginBtn">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn">
                    <Link to="/signup">Sign Up</Link>
                  </button>
                </>
              )}
              {show && (
                <div className="container flex">
                  <a href="/" className="avatarWrapper">
                    <img src={""} />
                    <FaUserCircle className="avatarIcon" />
                  </a>
                  <li className="logoutLink">
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                      onClick={logoutUser}
                    >
                      Logout
                    </NavLink>
                  </li>
                </div>
              )}
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
