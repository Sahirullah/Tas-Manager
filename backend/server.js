const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Use mock database by default (no MongoDB needed)
const mockDB = require('./config/mockDatabase');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Task Manager API is running!' });
});

// Error handler middleware (must be last)
app.use(errorHandler);

// Start server with mock database
try {
  console.log('🚀 Starting Task Manager API...');
  console.log('📦 Using Mock Database (In-Memory Storage)');
  console.log('⚠️  Note: Data will be lost when server restarts');
  
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}/api/health`);
  });
} catch (error) {
  console.error('❌ Server startup error:', error);
  process.exit(1);
}

module.exports = app;
