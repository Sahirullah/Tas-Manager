# 🔧 MongoDB Connection Error - Solutions

## Error Details
```
errno: undefined,
code: 'ENOTFOUND',
syscall: 'querySrv',
hostname: '_mongodb._tcp.cluster0.mongodb.net'
```

**Cause**: Cannot connect to MongoDB Atlas (cloud database) - likely due to:
- No internet connection
- Network/firewall blocking MongoDB Atlas
- DNS resolution issues
- MongoDB Atlas account issues

---

## ✅ Solution 1: Use Local MongoDB (Recommended for Development)

### Step 1: Install MongoDB Community Edition

#### Windows
1. Download from: https://www.mongodb.com/try/download/community
2. Run the installer
3. Choose "Install MongoDB as a Service"
4. Complete installation

#### Mac
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux (Ubuntu)
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

### Step 2: Verify MongoDB is Running

#### Windows
```bash
# MongoDB should start automatically
# Check Services: Press Win+R, type "services.msc"
# Look for "MongoDB Server"
```

#### Mac/Linux
```bash
# Check if MongoDB is running
ps aux | grep mongod
```

### Step 3: Update .env File

The `.env` file is already updated to use local MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017/task-manager
PORT=5000
NODE_ENV=development
```

### Step 4: Start Backend

```bash
cd backend
npm run dev
```

**Expected Output**:
```
MongoDB Connected: localhost
Server running on port 5000
```

---

## ✅ Solution 2: Use MongoDB Atlas (Cloud) - Fix Network Issues

If you want to use MongoDB Atlas instead:

### Step 1: Check Internet Connection
```bash
ping google.com
```

### Step 2: Check if Port 27017 is Blocked
```bash
# Windows
netstat -an | findstr :27017

# Mac/Linux
lsof -i :27017
```

### Step 3: Update .env with MongoDB Atlas

```env
MONGODB_URI=mongodb+srv://taskmanager:taskmanager123@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

### Step 4: Whitelist Your IP in MongoDB Atlas

1. Go to: https://cloud.mongodb.com
2. Login to your account
3. Go to "Network Access"
4. Click "Add IP Address"
5. Select "Allow Access from Anywhere" (for development)
6. Click "Confirm"

### Step 5: Start Backend

```bash
cd backend
npm run dev
```

---

## ✅ Solution 3: Use MongoDB Memory Server (Testing Only)

For testing without any database installation:

### Step 1: Install MongoDB Memory Server

```bash
cd backend
npm install mongodb-memory-server --save-dev
```

### Step 2: Update server.js

```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
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

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

module.exports = app;
```

---

## 🔍 Troubleshooting Steps

### Step 1: Verify MongoDB Connection String

Check your `.env` file:
```bash
cat backend/.env
```

Should show:
```
MONGODB_URI=mongodb://localhost:27017/task-manager
```

### Step 2: Test MongoDB Connection

```bash
# Windows
mongo mongodb://localhost:27017/task-manager

# Mac/Linux
mongosh mongodb://localhost:27017/task-manager
```

### Step 3: Check MongoDB Service Status

#### Windows
```bash
# Check if MongoDB service is running
sc query MongoDB
```

#### Mac
```bash
brew services list | grep mongodb
```

#### Linux
```bash
sudo systemctl status mongodb
```

### Step 4: Restart MongoDB

#### Windows
```bash
# Restart MongoDB service
net stop MongoDB
net start MongoDB
```

#### Mac
```bash
brew services restart mongodb-community
```

#### Linux
```bash
sudo systemctl restart mongodb
```

---

## 🚀 Quick Fix (Recommended)

### For Windows Users:

1. **Download MongoDB Community**
   - Visit: https://www.mongodb.com/try/download/community
   - Download Windows installer
   - Run installer and complete setup

2. **Verify Installation**
   - Open Command Prompt
   - Type: `mongod --version`
   - Should show version number

3. **Start MongoDB**
   - MongoDB starts automatically as a service
   - Or manually: `mongod`

4. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```

5. **Expected Success**
   ```
   MongoDB Connected: localhost
   Server running on port 5000
   ```

---

## 📊 Comparison of Solutions

| Solution | Pros | Cons | Best For |
|----------|------|------|----------|
| **Local MongoDB** | Fast, No internet needed, Full control | Requires installation | Development |
| **MongoDB Atlas** | Cloud-based, No installation | Requires internet, Network issues | Production |
| **Memory Server** | No installation, Fast | In-memory only, Data lost on restart | Testing |

---

## ✅ Verification Checklist

After implementing a solution:

- [ ] MongoDB is running
- [ ] `.env` file has correct `MONGODB_URI`
- [ ] Backend starts without errors
- [ ] See "MongoDB Connected" message
- [ ] See "Server running on port 5000" message
- [ ] Can access `http://localhost:5000/api/health`
- [ ] Frontend can connect to backend

---

## 🎯 Next Steps

1. **Choose a solution** (Local MongoDB recommended)
2. **Install/Setup MongoDB**
3. **Update `.env` file** (already done for local)
4. **Start backend**: `cd backend && npm run dev`
5. **Start frontend**: `npm run dev`
6. **Test in browser**: `http://localhost:5173`

---

## 📞 Still Having Issues?

### Check These:

1. **Is MongoDB running?**
   ```bash
   # Windows
   tasklist | findstr mongod
   
   # Mac/Linux
   ps aux | grep mongod
   ```

2. **Is port 27017 available?**
   ```bash
   # Windows
   netstat -ano | findstr :27017
   
   # Mac/Linux
   lsof -i :27017
   ```

3. **Is `.env` file correct?**
   ```bash
   cat backend/.env
   ```

4. **Are dependencies installed?**
   ```bash
   cd backend
   npm install
   ```

5. **Try restarting everything**
   ```bash
   # Stop backend (Ctrl+C)
   # Stop MongoDB
   # Restart MongoDB
   # Restart backend
   ```

---

## 🎉 Success!

Once you see:
```
MongoDB Connected: localhost
Server running on port 5000
```

Your backend is ready! Now start the frontend and enjoy your Task Manager! 🚀
