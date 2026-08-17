const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper for authorized headers
const authHeaders = () => {
  const token = localStorage.getItem('kp_admin_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

export const api = {
  // Public
  submitContact: async (data) => {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  // Auth
  loginAdmin: async (credentials) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return res.json();
  },

  verifyToken: async () => {
    const res = await fetch(`${API_BASE}/auth/verify`, {
      method: 'GET',
      headers: authHeaders()
    });
    return res.json();
  },

  // Messages (Admin Protected)
  getMessages: async (params = {}) => {
    const query = new URLSearchParams();
    if (params.status) query.append('status', params.status);
    if (params.search) query.append('search', params.search);

    const url = `${API_BASE}/contact${query.toString() ? `?${query.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: authHeaders()
    });
    return res.json();
  },

  getStats: async () => {
    const res = await fetch(`${API_BASE}/contact/stats`, {
      method: 'GET',
      headers: authHeaders()
    });
    return res.json();
  },

  updateMessageStatus: async (id, status) => {
    const res = await fetch(`${API_BASE}/contact/${id}/status`, {
      method: 'PATCH',
      headers: authHeaders(),
      body: JSON.stringify({ status })
    });
    return res.json();
  },

  deleteMessage: async (id) => {
    const res = await fetch(`${API_BASE}/contact/${id}`, {
      method: 'DELETE',
      headers: authHeaders()
    });
    return res.json();
  }
};
