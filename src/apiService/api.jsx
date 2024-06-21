import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const register = (userData) => API.post("/register/", userData);
export const login = (userData) => API.post("/login/", userData);

export const fetchOffers = async () => {
    try {
      const response = await API.get("/offers/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const fetchRooms = async () => {
    try {
      const response = await API.get("/rooms/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };