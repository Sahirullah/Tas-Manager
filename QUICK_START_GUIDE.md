# ⚡ Quick Start Guide - Task Manager

## 🎯 Get Running in 30 Seconds

### Step 1: Start Backend
```bash
cd backend
npm run dev
```

**Expected Output:**
```
🚀 Starting Task Manager API...
📦 Using Mock Database (In-Memory Storage)
✅ Server running on port 5000
```

### Step 2: Start Frontend (New Terminal)
```bash
npm run dev
```

**Expected Output:**
```
➜  Local:   http://localhost:5173/
```

### Step 3: Open Browser
```
http://localhost:5173
```

✅ **Done! App is running!**

---

## 🎮 Test It Out

1. **Add Task**: Type "Buy groceries" → Click "Add Task"
2. **Complete Task**: Click checkbox → Task gets strikethrough
3. **Edit Task**: Click edit icon → Change text → Save
4. **Delete Task**: Click delete icon → Task disappears
5. **Filter**: Click "Pending" or "Completed" to filter

---

## 🔧 Troubleshooting

### Backend won't start?
```bash
cd backend
npm install
npm run dev
```

### Port already in use?
```bash
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Frontend won't connect?
1. Make sure backend is running
2. Check browser console (F12)
3. Verify `http://localhost:5000` is accessible

---

## 📊 System Status

| Component | Status | Port |
|-----------|--------|------|
| Backend | ✅ Running | 5000 |
| Frontend | ✅ Ready | 5173 |
| Database | ✅ Mock | In-Memory |

---

## 📚 Full Documentation

- `START_HERE.md` - Detailed setup guide
- `BACKEND_RUNNING_SUCCESS.md` - Backend status & verification
- `QUICK_FIX_MONGODB_ERROR.md` - Error solutions
- `MERN_STACK_COMPLETE.md` - Full project overview

---

## 🚀 You're All Set!

Your MERN Stack Task Manager is ready to use!

**Happy Coding! 💻**
