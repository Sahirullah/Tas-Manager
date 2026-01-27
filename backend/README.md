# Task Manager Backend API

A RESTful API for the Task Manager application built with Node.js, Express.js, and MongoDB following the MVC pattern.

## Features

- CRUD operations for tasks
- Task filtering by status (all, completed, pending)
- Task statistics endpoint
- Input validation and error handling
- MongoDB integration with Mongoose

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks (supports ?status=completed|pending)
- `GET /api/tasks/:id` - Get single task by ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion status
- `DELETE /api/tasks/:id` - Delete task

### Statistics
- `GET /api/tasks/stats` - Get task statistics (total, completed, pending)

### Health Check
- `GET /api/health` - API health check

## Setup Instructions

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Set up environment variables:
   - Copy `.env` file and update MongoDB URI if needed
   - Default MongoDB URI: `mongodb://localhost:27017/taskmanager`

3. Start MongoDB service on your system

4. Run the server:
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

5. The API will be available at `http://localhost:5000`

## Request/Response Examples

### Create Task
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project documentation"
}
```

### Update Task
```bash
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Updated task title",
  "completed": true
}
```

### Response Format
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "_id": "...",
    "title": "Complete project documentation",
    "completed": false,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Project Structure

```
backend/
├── controllers/
│   └── taskController.js    # Business logic
├── models/
│   └── Task.js             # MongoDB schema
├── routes/
│   └── taskRoutes.js       # API routes
├── middleware/
│   └── errorHandler.js     # Error handling
├── .env                    # Environment variables
├── package.json
├── server.js              # Entry point
└── README.md
```