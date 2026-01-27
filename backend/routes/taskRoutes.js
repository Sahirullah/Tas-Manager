const express = require('express');
const { body } = require('express-validator');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
  getTaskStats
} = require('../controllers/taskController');

const router = express.Router();

// Validation middleware
const validateTask = [
  body('title')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Task title must be between 3 and 100 characters')
    .notEmpty()
    .withMessage('Task title is required')
];

const validateTaskUpdate = [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Task title must be between 3 and 100 characters'),
  body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed must be a boolean value')
];

// Routes
router.get('/stats', getTaskStats);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', validateTask, createTask);
router.put('/:id', validateTaskUpdate, updateTask);
router.patch('/:id/toggle', toggleTaskCompletion);
router.delete('/:id', deleteTask);

module.exports = router;