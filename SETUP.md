# Task Manager Setup Guide

This project is now integrated with a full MERN stack backend. Follow these steps to get everything running.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Setup Instructions

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 3. Start MongoDB
Make sure MongoDB is running on your system:
- **Local MongoDB**: Start your MongoDB service
- **MongoDB Atlas**: Update the `MONGODB_URI` in `backend/.env`

### 4. Configure Environment
The backend `.env` file is already configured for local development:
```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/taskmanager
NODE_ENV=development
```

### 5. Run the Application

#### Option 1: Run Both Frontend and Backend Together
```bash
npm run dev:full
```

#### Option 2: Run Separately
Terminal 1 (Backend):
```bash
npm run dev:backend
```

Terminal 2 (Frontend):
```bash
npm run dev
```

### 6. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5002
- API Health Check: http://localhost:5002/api/health

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `PATCH /api/tasks/:id/toggle` - Toggle completion
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats` - Get statistics

## Features

✅ **Preserved Design**: All original styling and UI components remain unchanged
✅ **API Integration**: Frontend now uses MongoDB backend instead of localStorage
✅ **Error Handling**: Graceful error handling with user feedback
✅ **Loading States**: Loading indicators during API calls
✅ **Real-time Updates**: Tasks sync with database immediately
✅ **Data Persistence**: Tasks are stored in MongoDB
✅ **Validation**: Server-side validation for task creation/updates

## Troubleshooting

**MongoDB Connection Issues:**
- Ensure MongoDB is running locally
- Check the connection string in `backend/.env`
- For MongoDB Atlas, ensure your IP is whitelisted

**Port Conflicts:**
- Backend runs on port 5001
- Frontend runs on port 5173
- Change ports in respective config files if needed

**CORS Issues:**
- Backend is configured to accept requests from frontend
- If issues persist, check the CORS configuration in `backend/server.js`