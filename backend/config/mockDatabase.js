// Mock Database - In-Memory Storage for Development
// This allows the app to run without MongoDB installation

const tasks = [];
let taskId = 1;

const mockDB = {
  // Get all tasks
  getAllTasks: async () => {
    return tasks;
  },

  // Get task by ID
  getTaskById: async (id) => {
    const task = tasks.find(t => t._id === parseInt(id));
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  },

  // Create task
  createTask: async (title) => {
    if (!title || title.trim().length < 3) {
      throw new Error('Task title must be at least 3 characters long');
    }

    const newTask = {
      _id: taskId++,
      title: title.trim(),
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    tasks.push(newTask);
    return newTask;
  },

  // Update task
  updateTask: async (id, updates) => {
    const task = tasks.find(t => t._id === parseInt(id));
    if (!task) {
      throw new Error('Task not found');
    }

    if (updates.title) {
      if (updates.title.trim().length < 3) {
        throw new Error('Task title must be at least 3 characters long');
      }
      task.title = updates.title.trim();
    }

    if (updates.hasOwnProperty('completed')) {
      task.completed = updates.completed;
    }

    task.updatedAt = new Date();
    return task;
  },

  // Toggle task completion
  toggleTaskCompletion: async (id) => {
    const task = tasks.find(t => t._id === parseInt(id));
    if (!task) {
      throw new Error('Task not found');
    }

    task.completed = !task.completed;
    task.updatedAt = new Date();
    return task;
  },

  // Delete task
  deleteTask: async (id) => {
    const index = tasks.findIndex(t => t._id === parseInt(id));
    if (index === -1) {
      throw new Error('Task not found');
    }

    const deletedTask = tasks.splice(index, 1);
    return deletedTask[0];
  },

  // Get statistics
  getTaskStats: async () => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    return {
      total,
      completed,
      pending
    };
  },

  // Clear all tasks (for testing)
  clearAllTasks: async () => {
    tasks.length = 0;
    taskId = 1;
  }
};

module.exports = mockDB;
