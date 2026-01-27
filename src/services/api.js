const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Get all tasks with optional status filter
  async getTasks(status = null) {
    const query = status ? `?status=${status}` : '';
    return this.request(`/tasks${query}`);
  }

  // Get single task by ID
  async getTask(id) {
    return this.request(`/tasks/${id}`);
  }

  // Create new task
  async createTask(title) {
    return this.request('/tasks', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });
  }

  // Update task
  async updateTask(id, updates) {
    return this.request(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  // Toggle task completion
  async toggleTask(id) {
    return this.request(`/tasks/${id}/toggle`, {
      method: 'PATCH',
    });
  }

  // Delete task
  async deleteTask(id) {
    return this.request(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }

  // Get task statistics
  async getStats() {
    return this.request('/tasks/stats');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export default new ApiService();