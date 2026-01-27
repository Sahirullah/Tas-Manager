# 🚀 How to Run the Task Manager Application

## Quick Start (Copy & Paste)

### Step 1: Open Terminal 1 - Start Backend

```bash
cd backend
npm run dev
```

**Wait for this message**:
```
MongoDB Connected: cluster0.mongodb.net
Server running on port 5000
```

### Step 2: Open Terminal 2 - Start Frontend

```bash
npm run dev
```

**Wait for this message**:
```
➜  Local:   http://localhost:5173/
```

### Step 3: Open Browser

Visit: **http://localhost:5173**

---

## ✅ Verification Checklist

- [ ] Backend terminal shows "MongoDB Connected"
- [ ] Backend terminal shows "Server running on port 5000"
- [ ] Frontend terminal shows "Local: http://localhost:5173"
- [ ] Browser opens to http://localhost:5173
- [ ] You can see the Task Manager interface
- [ ] You can add a task
- [ ] Task appears in the list

---

## 🎯 What to Test

### 1. Add a Task
- Type "Buy groceries" in the input
- Click "Add Task" button
- Task should appear in the list

### 2. Complete a Task
- Click the checkbox next to a task
- Task should get a strikethrough
- "Completed" count should increase

### 3. Edit a Task
- Click the edit icon (✎) on a task
- Change the text
- Click the save icon (✓)
- Task should update

### 4. Delete a Task
- Click the delete icon (🗑) on a task
- Task should disappear

### 5. Filter Tasks
- Click "Pending" button
- Only incomplete tasks should show
- Click "Completed" button
- Only complete tasks should show
- Click "All Tasks" button
- All tasks should show

### 6. View Statistics
- Check the stat cards at the top
- Total Tasks count
- Completed count
- Pending count

---

## 🔧 Troubleshooting

### Backend Won't Start

**Error**: `Cannot find module 'dotenv'`
```bash
cd backend
npm install
npm run dev
```

**Error**: `Port 5000 already in use`
```bash
# Edit backend/.env
PORT=5001
```

**Error**: `MongoDB connection error`
- Check internet connection
- Verify `.env` file exists in backend folder
- Check if MongoDB Atlas account is active

### Frontend Won't Start

**Error**: `Cannot find module 'react'`
```bash
npm install
npm run dev
```

**Error**: `Port 5173 already in use`
```bash
npm run dev -- --port 5174
```

### Can't Connect Frontend to Backend

1. Make sure backend is running on port 5000
2. Check browser console for errors (F12)
3. Verify API URL is correct

---

## 📊 Expected Output

### Backend Terminal
```
PS C:\Users\Administrator\Desktop\intership\backend> npm run dev

> task-manager-backend@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.11
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
MongoDB Connected: cluster0.mongodb.net
Server running on port 5000
```

### Frontend Terminal
```
PS C:\Users\Administrator\Desktop\intership> npm run dev

> intership@0.0.1 dev
> vite

  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Browser
- Task Manager interface loads
- Header shows "📋 Task Manager"
- Statistics cards visible
- Input form visible
- Filter buttons visible
- Empty state message visible

---

## 🎮 Interactive Testing

### Test 1: Create Multiple Tasks
```
1. Add "Learn React"
2. Add "Learn Node.js"
3. Add "Learn MongoDB"
4. Add "Build MERN App"
```

### Test 2: Complete Some Tasks
```
1. Check "Learn React"
2. Check "Learn Node.js"
3. Leave "Learn MongoDB" unchecked
4. Leave "Build MERN App" unchecked
```

### Test 3: Filter and Verify
```
1. Click "Completed" - should show 2 tasks
2. Click "Pending" - should show 2 tasks
3. Click "All Tasks" - should show 4 tasks
4. Check stats: Total=4, Completed=2, Pending=2
```

### Test 4: Edit and Delete
```
1. Edit "Learn React" to "Learn React Hooks"
2. Delete "Learn Node.js"
3. Verify stats update: Total=3, Completed=1, Pending=2
```

---

## 🔗 API Testing (Optional)

### Test Backend API with Browser

Visit these URLs in your browser:

1. **Health Check**
   ```
   http://localhost:5000/api/health
   ```
   Should show: `{"message":"Task Manager API is running!"}`

2. **Get All Tasks**
   ```
   http://localhost:5000/api/tasks
   ```
   Should show: `[{...task objects...}]`

---

## 📱 Responsive Testing

### Test on Different Screen Sizes

1. **Desktop** (1920x1080)
   - All features visible
   - Smooth layout

2. **Tablet** (768x1024)
   - Responsive grid
   - Touch-friendly buttons

3. **Mobile** (375x667)
   - Single column layout
   - Optimized for touch
   - Readable text

### Test in Browser DevTools
1. Press F12 to open DevTools
2. Click device toggle (Ctrl+Shift+M)
3. Select different devices
4. Test responsiveness

---

## 🎯 Success Criteria

✅ **Backend**
- [ ] Server starts without errors
- [ ] MongoDB connects successfully
- [ ] API responds to requests
- [ ] No console errors

✅ **Frontend**
- [ ] App loads in browser
- [ ] UI renders correctly
- [ ] Can add tasks
- [ ] Can edit tasks
- [ ] Can delete tasks
- [ ] Can filter tasks
- [ ] Statistics update correctly

✅ **Integration**
- [ ] Frontend communicates with backend
- [ ] Tasks persist in database
- [ ] All CRUD operations work
- [ ] No CORS errors

---

## 🚨 Emergency Restart

If something goes wrong:

### Terminal 1 (Backend)
```bash
# Press Ctrl+C to stop
# Then run:
cd backend
npm run dev
```

### Terminal 2 (Frontend)
```bash
# Press Ctrl+C to stop
# Then run:
npm run dev
```

### Clear Browser Cache
```
Press Ctrl+Shift+Delete
Select "All time"
Click "Clear data"
Refresh page
```

---

## 📞 Need Help?

1. Check **MERN_STACK_COMPLETE.md** for overview
2. Check **backend/SETUP.md** for backend details
3. Check **backend/API_TESTING.md** for API testing
4. Check **backend/QUICKSTART.md** for quick reference

---

## ✨ You're All Set!

Your MERN Stack Task Manager is ready to use!

**Commands to Remember**:
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
npm run dev

# Browser
http://localhost:5173
```

---

**Happy Coding! 🎉**
