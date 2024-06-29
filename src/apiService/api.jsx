import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Function to handle user registration
export const register = (userData) => API.post("/register/", userData);

// Function to handle user login
export const login = (userData) => API.post("/login/", userData);

// Function to fetch all offers
export const fetchOffers = async () => {
  try {
    const response = await API.get('/offers/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch all rooms
export const fetchRooms = async () => {
  try {
    const response = await API.get("/rooms/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get user details
export const getUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }
    const response = await API.get('/api/user/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update user details
export const updateUser = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await API.post("/user/", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to search rooms
export const searchRooms = async (query) => {
  try {
    const response = await API.get(`/search_rooms?query=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to view rooms
export const viewRooms = async () => {
  try {
    const response = await API.get("/view_rooms/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to book a room

export const bookRoom = async (room_id, check_in, check_out) => {
  const token = localStorage.getItem('token');
  try {
      const response = await axios.post(
          '/api/book_room/',
          { room_id, check_in, check_out },
          { headers: { Authorization: `Token ${token}` } }
      );
      return response.data;
  } catch (error) {
      console.error('Error booking room:', error);
      throw error;
  }
};
// Function to fetch booked rooms
export const fetchBookedRooms = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await API.get("/booked-rooms/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to cancel a booked room
export const cancelBookedRoom = async (bookingId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await API.delete(`/booked-rooms/${bookingId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update user profile
export const updateProfile = async (profileData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await API.post("/update_profile/", profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to reset password
export const passwordReset = (email) => API.post("/password_reset/", { email });

// Function to confirm password reset
export const passwordResetConfirm = (resetData) => API.post("/password_reset_confirm/", resetData);

// Function to submit feedback
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await API.post("/feedback/", feedbackData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch feedback
export const fetchFeedback = async () => {
  try {
    const response = await API.get("/feedback/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle canceling a booked room
export const handleCancelBooking = async (bookingId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await API.delete(`/booked-rooms/${bookingId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle user login
export const userLogin = async (credentials) => {
  try {
    const response = await API.post('/login/', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token); // Store token in local storage
    return response.data;
  } catch (error) {
    throw error;
  }
};