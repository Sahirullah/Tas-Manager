const mockDB = require('../config/mockDatabase');
const { validationResult } = require('express-validator');

// Get all tasks with optional filtering
const getAllTasks = async (req, res) => {
  try {
    const { status } = req.query;
    let tasks = await mockDB.getAllTasks();

    if (status === 'completed') {
      tasks = tasks.filter(t => t.completed);
    } else if (status === 'pending') {
      tasks = tasks.filter(t => !t.completed);
    }

    // Sort by creation date (newest first)
    tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// Get single task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await mockDB.getTaskById(req.params.id);
    
    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }
};

// Create new task
const createTask = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: errors.array()
      });
    }

    const { title } = req.body;
    const task = await mockDB.createTask(title);
    
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update task
const updateTask = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: errors.array()
      });
    }

    const { title, completed } = req.body;
    const updates = {};

    if (title !== undefined) {
      updates.title = title;
    }
    if (completed !== undefined) {
      updates.completed = completed;
    }

    const task = await mockDB.updateTask(req.params.id, updates);

    res.json({
      success: true,
      message: 'Task updated successfully',
      data: task
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await mockDB.deleteTask(req.params.id);

    res.json({
      success: true,
      message: 'Task deleted successfully',
      data: task
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }
};

// Toggle task completion status
const toggleTaskCompletion = async (req, res) => {
  try {
    const task = await mockDB.toggleTaskCompletion(req.params.id);

    res.json({
      success: true,
      message: `Task marked as ${task.completed ? 'completed' : 'pending'}`,
      data: task
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }
};

// Get task statistics
const getTaskStats = async (req, res) => {
  try {
    const stats = await mockDB.getTaskStats();

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
  getTaskStats
};
