// Base API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || data.message || 'Something went wrong');
  }
  
  return data;
};

// Helper function to make authenticated requests
const authFetch = (url, options = {}) => {
  const token = getAuthToken();
  
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });
};

// Admin Authentication API
export const adminAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  },

  signup: async (name, email, phone, password) => {
    const response = await fetch(`${API_BASE_URL}/admin/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: name, email, phone, password }),
    });
    return handleResponse(response);
  },

  getProfile: async () => {
    const response = await authFetch(`${API_BASE_URL}/admin/profile`);
    return handleResponse(response);
  },

  updateProfile: async (profileData) => {
    const response = await authFetch(`${API_BASE_URL}/admin/profile`, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
    return handleResponse(response);
  },

  changePassword: async (currentPassword, newPassword) => {
    const response = await authFetch(`${API_BASE_URL}/admin/change-password`, {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    return handleResponse(response);
  },

  // Admin Users Management (Superadmin only)
  getAllAdmins: async () => {
    const response = await authFetch(`${API_BASE_URL}/admin/users`);
    return handleResponse(response);
  },

  createAdmin: async (adminData) => {
    const response = await authFetch(`${API_BASE_URL}/admin/users`, {
      method: 'POST',
      body: JSON.stringify(adminData),
    });
    return handleResponse(response);
  },

  updateAdmin: async (adminId, adminData) => {
    const response = await authFetch(`${API_BASE_URL}/admin/users/${adminId}`, {
      method: 'PUT',
      body: JSON.stringify(adminData),
    });
    return handleResponse(response);
  },

  deleteAdmin: async (adminId) => {
    const response = await authFetch(`${API_BASE_URL}/admin/users/${adminId}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },
};

// Products API
export const productsAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const url = queryParams ? `${API_BASE_URL}/products?${queryParams}` : `${API_BASE_URL}/products`;
    const response = await fetch(url);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return handleResponse(response);
  },

  create: async (productData) => {
    const response = await authFetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      body: JSON.stringify(productData),
    });
    return handleResponse(response);
  },

  update: async (id, productData) => {
    const response = await authFetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await authFetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },

  updateStock: async (id, quantity) => {
    const response = await authFetch(`${API_BASE_URL}/products/${id}/stock`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });
    return handleResponse(response);
  },
};

// Customers API
export const customersAPI = {
  getAll: async () => {
    const response = await authFetch(`${API_BASE_URL}/customers`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await authFetch(`${API_BASE_URL}/customers/${id}`);
    return handleResponse(response);
  },

  create: async (customerData) => {
    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customerData),
    });
    return handleResponse(response);
  },

  update: async (id, customerData) => {
    const response = await authFetch(`${API_BASE_URL}/customers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customerData),
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await authFetch(`${API_BASE_URL}/customers/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },

  getOrders: async (customerId) => {
    const response = await authFetch(`${API_BASE_URL}/customers/${customerId}/orders`);
    return handleResponse(response);
  },
};

// Orders API
export const ordersAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const url = queryParams ? `${API_BASE_URL}/orders?${queryParams}` : `${API_BASE_URL}/orders`;
    const response = await authFetch(url);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await authFetch(`${API_BASE_URL}/orders/${id}`);
    return handleResponse(response);
  },

  create: async (orderData) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    return handleResponse(response);
  },

  updateStatus: async (id, status) => {
    const response = await authFetch(`${API_BASE_URL}/orders/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await authFetch(`${API_BASE_URL}/orders/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },

  getStats: async () => {
    const response = await authFetch(`${API_BASE_URL}/orders/stats`);
    return handleResponse(response);
  },
};

// Health Check
export const healthCheck = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Backend server is not responding');
  }
};

const api = {
  adminAPI,
  productsAPI,
  customersAPI,
  ordersAPI,
  healthCheck,
};

export default api;
