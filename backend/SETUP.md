# Task Manager Backend - Setup Guide

## Overview
This is the backend API for the Task Manager MERN application. It provides RESTful endpoints for managing tasks with MongoDB as the database.

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas account)

## Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
The `.env` file is already configured with MongoDB Atlas. If you want to use a local MongoDB instance, update the `.env` file:

```env
# For MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://taskmanager:taskmanager123@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority

# For Local MongoDB
MONGODB_URI=mongodb://localhost:27017/task-manager

PORT=5000
NODE_ENV=development
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Check if API is running

### Tasks
- **GET** `/api/tasks` - Get all tasks
- **GET** `/api/tasks/:id` - Get a specific task
- **POST** `/api/tasks` - Create a new task
- **PUT** `/api/tasks/:id` - Update a task
- **PATCH** `/api/tasks/:id/toggle` - Toggle task completion status
- **DELETE** `/api/tasks/:id` - Delete a task
- **GET** `/api/tasks/stats` - Get task statistics

## API Request Examples

### Create a Task
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Buy groceries"
}
```

### Get All Tasks
```bash
GET /api/tasks
```

### Update a Task
```bash
PUT /api/tasks/[task_id]
Content-Type: application/json

{
  "title": "Buy groceries and cook dinner",
  "completed": false
}
```

### Toggle Task Completion
```bash
PATCH /api/tasks/[task_id]/toggle
```

### Delete a Task
```bash
DELETE /api/tasks/[task_id]
```

### Get Task Statistics
```bash
GET /api/tasks/stats
```

## Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection configuration
├── controllers/
│   └── taskController.js    # Task business logic
├── middleware/
│   └── errorHandler.js      # Global error handling
├── models/
│   └── Task.js              # Task data model
├── routes/
│   └── taskRoutes.js        # API routes
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Dependencies
├── server.js                # Main server file
└── README.md                # Documentation
```

## Database Schema

### Task Model
```javascript
{
  _id: ObjectId,
  title: String (required, 3-100 chars),
  completed: Boolean (default: false),
  createdAt: Date (default: now),
  updatedAt: Date (default: now)
}
```

## Error Handling

The API includes comprehensive error handling:
- Validation errors for invalid input
- MongoDB connection errors
- 404 errors for not found resources
- 500 errors for server issues

All errors are returned in the following format:
```json
{
  "error": "Error message",
  "status": 400
}
```

## Troubleshooting

### MongoDB Connection Error
**Error**: `MongooseError: The uri parameter to openUri() must be a string`

**Solution**: 
1. Check if `.env` file exists in the backend folder
2. Verify `MONGODB_URI` is set correctly
3. If using MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use
**Error**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solution**:
1. Change the PORT in `.env` file
2. Or kill the process using port 5000:
   - Windows: `netstat -ano | findstr :5000` then `taskkill /PID [PID] /F`
   - Mac/Linux: `lsof -i :5000` then `kill -9 [PID]`

### MongoDB Atlas Connection Issues
1. Ensure your IP address is whitelisted in MongoDB Atlas
2. Check username and password are correct
3. Verify the cluster name in the connection string

## Testing with Postman

1. Import the API endpoints into Postman
2. Set the base URL to `http://localhost:5000`
3. Test each endpoint with sample data

## Frontend Integration

The frontend React app should connect to this backend at:
```
http://localhost:5000/api
```

Update the API base URL in your React app's API service file.

## Performance Tips

1. Use indexes on frequently queried fields
2. Implement pagination for large datasets
3. Cache frequently accessed data
4. Use connection pooling for database

## Security Considerations

1. Always use environment variables for sensitive data
2. Validate and sanitize all user inputs
3. Implement rate limiting for production
4. Use HTTPS in production
5. Implement authentication/authorization as needed

## Next Steps

1. Connect the React frontend to this backend
2. Test all API endpoints
3. Implement additional features as needed
4. Deploy to production (Heroku, AWS, etc.)

## Support

For issues or questions, check the error logs and ensure:
- MongoDB is running and accessible
- All dependencies are installed
- Environment variables are correctly set
- Node.js version is compatible
