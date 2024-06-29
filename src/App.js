import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./app.css";
import { AuthProvider } from "./components/auth/authContext";
import Footer from "./components/footer/Footer";
import Login from "./components/login/login";
import Navbar from "./components/navbar/Navbar";
import Offer from "./components/offers/Offers";
import Signup from "./components/signup/signup";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/contactus/contact";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import Room from "./pages/rooms/rooms";
import Booking from "./components/booking/bookings";
import Bookings from "./components/booking/bookings";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/rooms"
            element={
              <>
                <Navbar />
                <Room />
                <Footer />
              </>
            }
          />
          <Route
            path="/Booking"
            element={
              <>
                <Navbar />
                <Bookings />
                <Footer />
              </>
            }
          />

          <Route
            path="/offers"
            element={
              <>
                <Navbar />
                <Offer />
                <Footer />
              </>
            }
          />
          <Route
            path="/bookings"
            element={
              <>
                <Navbar />
                <Booking />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
