import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./app.css";
import About from "./components/about/About";
import { AuthProvider } from "./components/auth/authContext";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Login from "./components/login/login";
import Navbar from "./components/navbar/Navbar";
import Offer from "./components/offers/Offers";
import Popular from "./components/popular/Popular";
import Signup from "./components/signup/signup";
import Booking from "./pages/booking/bookings";
import ContactUs from "./pages/contactus/contact";
import Home from "./pages/home/Home";
import Room from "./components/rooms/rooms";
import RestoBar from "./components/resto&bar/resto&bar";

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
                <Footer />
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
            path="/restobar"
            element={
              <>
                <Navbar />
                <RestoBar />
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
            path="/popular"
            element={
              <>
                <Navbar />
                <Popular />
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
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
