# Quick Start Guide - Task Manager Backend

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Start the Server
```bash
npm run dev
```

You should see:
```
[nodemon] starting `node server.js`
MongoDB Connected: cluster0.mongodb.net
Server running on port 5000
```

### Step 3: Test the API
Open your browser or Postman and visit:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "message": "Task Manager API is running!"
}
```

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start server with auto-reload |
| `npm start` | Start server in production mode |
| `npm test` | Run tests (not configured yet) |

## 🔗 API Endpoints Quick Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Check API status |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create new task |
| GET | `/api/tasks/:id` | Get specific task |
| PUT | `/api/tasks/:id` | Update task |
| PATCH | `/api/tasks/:id/toggle` | Toggle completion |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/tasks/stats` | Get statistics |

## 🧪 Test with cURL

### Create a Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn MERN Stack"}'
```

### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

### Toggle Task Completion
```bash
curl -X PATCH http://localhost:5000/api/tasks/[TASK_ID]/toggle
```

### Delete a Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/[TASK_ID]
```

## ⚙️ Environment Variables

The `.env` file is pre-configured with:
- **MONGODB_URI**: MongoDB Atlas connection string
- **PORT**: 5000
- **NODE_ENV**: development

## 🐛 Troubleshooting

### Issue: MongoDB Connection Error
**Solution**: The `.env` file is already configured. If it still fails:
1. Check internet connection
2. Verify MongoDB Atlas account is active
3. Check if your IP is whitelisted in MongoDB Atlas

### Issue: Port 5000 Already in Use
**Solution**: Change PORT in `.env` file to another port (e.g., 5001)

### Issue: nodemon not found
**Solution**: Run `npm install` again to install dev dependencies

## 📚 Next Steps

1. ✅ Backend is running
2. ⏭️ Connect React frontend to this API
3. ⏭️ Test all endpoints with Postman
4. ⏭️ Deploy to production

## 🎯 Frontend Connection

In your React app, set the API base URL to:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## 📞 Need Help?

Check the detailed setup guide: `SETUP.md`

---

**Happy Coding! 🎉**
