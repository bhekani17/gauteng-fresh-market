import React, { createContext, useState, useContext, useEffect } from 'react';
import { adminAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is authenticated on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const data = await adminAPI.getProfile();
      setAdmin(data.admin);
      setError(null);
    } catch (err) {
      console.error('Auth check failed:', err);
      localStorage.removeItem('authToken');
      localStorage.removeItem('isAdmin');
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const data = await adminAPI.login(email, password);
      
      // Store token and admin info
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('isAdmin', 'true');
      setAdmin(data.admin);
      
      return { success: true, admin: data.admin };
    } catch (err) {
      const errorMessage = err.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const signup = async (name, email, phone, password) => {
    try {
      setError(null);
      const data = await adminAPI.signup(name, email, phone, password);
      
      // Store token and admin info
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('isAdmin', 'true');
      setAdmin(data.admin);
      
      return { success: true, admin: data.admin };
    } catch (err) {
      const errorMessage = err.message || 'Signup failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isAdmin');
    setAdmin(null);
    setError(null);
  };

  const updateProfile = async (profileData) => {
    try {
      setError(null);
      const data = await adminAPI.updateProfile(profileData);
      setAdmin(data.admin);
      return { success: true, admin: data.admin };
    } catch (err) {
      const errorMessage = err.message || 'Profile update failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      setError(null);
      await adminAPI.changePassword(currentPassword, newPassword);
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Password change failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const value = {
    admin,
    loading,
    error,
    isAuthenticated: !!admin,
    login,
    signup,
    logout,
    updateProfile,
    changePassword,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
