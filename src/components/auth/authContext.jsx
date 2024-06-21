import React, { createContext, useState, useEffect } from 'react';
import { login as apiLogin } from '../../apiService/api'; // Adjust import path based on your project structure

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userDetails = localStorage.getItem('userDetails');

    if (token && userDetails) {
      setIsLoggedIn(true);
      const parsedUserDetails = JSON.parse(userDetails);
      setUsername(parsedUserDetails.name.split(' ')[0]);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  const login = async (userData) => {
    try {
      const response = await apiLogin(userData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('userDetails', JSON.stringify(user));

      setIsLoggedIn(true);
      setUsername(user.name.split(' ')[0]);

      // Optionally, you can perform additional actions upon successful login
      // Example: Redirect the user to another page
      // history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show error message)
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
