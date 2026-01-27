# 🚀 Quick Fix - MongoDB Connection Error

## The Problem
```
errno: undefined,
code: 'ENOTFOUND',
syscall: 'querySrv',
hostname: '_mongodb._tcp.cluster0.mongodb.net'
```

**Cause**: Cannot connect to MongoDB Atlas (cloud database)

---

## ✅ SOLUTION 1: Use Mock Database (Fastest - No Installation)

### Run This Command:
```bash
cd backend
npm run dev:mock
```

**Expected Output**:
```
[nodemon] starting `node server-mock.js`
Using Mock Database (In-Memory Storage)
✅ Mock Database Connected Successfully
Server running on port 5000
```

### Then Start Frontend:
```bash
npm run dev
```

### Visit Browser:
```
http://localhost:5173
```

**✅ Done! Your app is running!**

---

## ✅ SOLUTION 2: Install Local MongoDB (Recommended for Production)

### Step 1: Download MongoDB
- Windows: https://www.mongodb.com/try/download/community
- Mac: `brew install mongodb-community`
- Linux: `sudo apt-get install mongodb`

### Step 2: Start MongoDB
- Windows: Starts automatically
- Mac: `brew services start mongodb-community`
- Linux: `sudo systemctl start mongodb`

### Step 3: Run Backend
```bash
cd backend
npm run dev
```

### Step 4: Start Frontend
```bash
npm run dev
```

---

## 🎯 Which Solution to Choose?

| Solution | Time | Installation | Data Persistence |
|----------|------|--------------|------------------|
| **Mock Database** | 30 seconds | None | No (resets on restart) |
| **Local MongoDB** | 5 minutes | Required | Yes |

**For Quick Testing**: Use Mock Database ✅
**For Development**: Use Local MongoDB ✅

---

## 🔄 Switch Between Solutions

### Use Mock Database:
```bash
cd backend
npm run dev:mock
```

### Use Real MongoDB:
```bash
cd backend
npm run dev
```

---

## ✨ What Works with Mock Database

✅ Add tasks
✅ Edit tasks
✅ Delete tasks
✅ Complete tasks
✅ Filter tasks
✅ View statistics
✅ All frontend features

⚠️ Data resets when server restarts (expected for mock)

---

## 🎉 You're Ready!

### Quick Start (Copy & Paste):

**Terminal 1**:
```bash
cd backend
npm run dev:mock
```

**Terminal 2**:
```bash
npm run dev
```

**Browser**:
```
http://localhost:5173
```

---

## 📞 Still Having Issues?

### If Mock Database Doesn't Work:

1. **Check Node.js is installed**:
   ```bash
   node --version
   ```

2. **Check dependencies are installed**:
   ```bash
   cd backend
   npm install
   ```

3. **Try again**:
   ```bash
   npm run dev:mock
   ```

### If You Want Real MongoDB:

Follow **SOLUTION 2** above or check `MONGODB_CONNECTION_SOLUTIONS.md`

---

## 🚀 Next Steps

1. ✅ Start backend with mock database
2. ✅ Start frontend
3. ✅ Test the app
4. ✅ (Optional) Install MongoDB for production

---

**Happy Coding! 🎉**
