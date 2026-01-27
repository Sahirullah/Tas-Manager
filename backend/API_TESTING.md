# API Testing Guide

## 🧪 Test the Task Manager API

### Prerequisites
- Backend running on `http://localhost:5000`
- Postman or cURL installed
- Browser with developer tools

## Method 1: Using Browser

### Test Health Check
1. Open browser
2. Visit: `http://localhost:5000/api/health`
3. You should see: `{"message":"Task Manager API is running!"}`

### Get All Tasks
1. Visit: `http://localhost:5000/api/tasks`
2. You should see: `[]` (empty array initially)

## Method 2: Using cURL

### Create a Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn MERN Stack"}'
```

**Response**:
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Learn MERN Stack",
  "completed": false,
  "createdAt": "2024-01-27T10:30:00.000Z",
  "updatedAt": "2024-01-27T10:30:00.000Z"
}
```

### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

### Get Specific Task
```bash
curl http://localhost:5000/api/tasks/507f1f77bcf86cd799439011
```

### Update a Task
```bash
curl -X PUT http://localhost:5000/api/tasks/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn MERN Stack - Updated","completed":false}'
```

### Toggle Task Completion
```bash
curl -X PATCH http://localhost:5000/api/tasks/507f1f77bcf86cd799439011/toggle
```

### Delete a Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/507f1f77bcf86cd799439011
```

### Get Task Statistics
```bash
curl http://localhost:5000/api/tasks/stats
```

## Method 3: Using Postman

### Setup Postman

1. **Create New Collection**
   - Click "New" → "Collection"
   - Name: "Task Manager API"

2. **Create Environment Variable**
   - Click "Environments" → "Create New"
   - Name: "Task Manager"
   - Add variable: `base_url` = `http://localhost:5000/api`

3. **Create Requests**

### Request 1: Health Check
- **Method**: GET
- **URL**: `{{base_url}}/health`
- **Click Send**

### Request 2: Get All Tasks
- **Method**: GET
- **URL**: `{{base_url}}/tasks`
- **Click Send**

### Request 3: Create Task
- **Method**: POST
- **URL**: `{{base_url}}/tasks`
- **Headers**: 
  - Key: `Content-Type`
  - Value: `application/json`
- **Body** (raw JSON):
```json
{
  "title": "Buy groceries"
}
```
- **Click Send**

### Request 4: Update Task
- **Method**: PUT
- **URL**: `{{base_url}}/tasks/[TASK_ID]`
- **Headers**: 
  - Key: `Content-Type`
  - Value: `application/json`
- **Body** (raw JSON):
```json
{
  "title": "Buy groceries and cook dinner",
  "completed": false
}
```
- **Click Send**

### Request 5: Toggle Completion
- **Method**: PATCH
- **URL**: `{{base_url}}/tasks/[TASK_ID]/toggle`
- **Click Send**

### Request 6: Delete Task
- **Method**: DELETE
- **URL**: `{{base_url}}/tasks/[TASK_ID]`
- **Click Send**

### Request 7: Get Statistics
- **Method**: GET
- **URL**: `{{base_url}}/tasks/stats`
- **Click Send**

## Expected Responses

### Success Response (201 Created)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Buy groceries",
  "completed": false,
  "createdAt": "2024-01-27T10:30:00.000Z",
  "updatedAt": "2024-01-27T10:30:00.000Z"
}
```

### Error Response (400 Bad Request)
```json
{
  "error": "Task title must be between 3 and 100 characters",
  "status": 400
}
```

### Error Response (404 Not Found)
```json
{
  "error": "Task not found",
  "status": 404
}
```

## Validation Rules

### Task Title
- **Required**: Yes
- **Min Length**: 3 characters
- **Max Length**: 100 characters
- **Type**: String

### Completed Status
- **Type**: Boolean
- **Default**: false
- **Optional**: Yes

## Test Scenarios

### Scenario 1: Create and Retrieve
1. Create a task with title "Test Task"
2. Copy the returned `_id`
3. Get the task using the `_id`
4. Verify the data matches

### Scenario 2: Update Task
1. Create a task
2. Update the title
3. Verify the update was successful
4. Check `updatedAt` timestamp changed

### Scenario 3: Toggle Completion
1. Create a task (completed: false)
2. Toggle completion (PATCH)
3. Verify completed is now true
4. Toggle again
5. Verify completed is now false

### Scenario 4: Delete Task
1. Create a task
2. Delete the task
3. Try to get the deleted task
4. Should receive 404 error

### Scenario 5: Validation
1. Try to create task with empty title
2. Should receive validation error
3. Try to create task with 1 character
4. Should receive validation error
5. Try to create task with 101 characters
6. Should receive validation error

## Performance Testing

### Load Test (Create 100 Tasks)
```bash
for i in {1..100}; do
  curl -X POST http://localhost:5000/api/tasks \
    -H "Content-Type: application/json" \
    -d "{\"title\":\"Task $i\"}"
done
```

### Get All Tasks Performance
```bash
time curl http://localhost:5000/api/tasks
```

## Debugging Tips

### Check Server Logs
- Look at terminal where backend is running
- Check for error messages
- Verify MongoDB connection

### Use Browser DevTools
1. Open DevTools (F12)
2. Go to Network tab
3. Make API requests
4. Check request/response details

### Check Request Headers
- Ensure `Content-Type: application/json` is set for POST/PUT
- Check for CORS errors

### Verify MongoDB Data
- Use MongoDB Atlas dashboard
- Check if data is being saved
- Verify collection structure

## Common Issues

### Issue: 400 Bad Request
**Cause**: Invalid input data
**Solution**: Check validation rules and request body

### Issue: 404 Not Found
**Cause**: Task ID doesn't exist
**Solution**: Verify the task ID is correct

### Issue: 500 Internal Server Error
**Cause**: Server error
**Solution**: Check backend logs for details

### Issue: CORS Error
**Cause**: Frontend and backend on different origins
**Solution**: CORS is already enabled, check frontend URL

## Next Steps

1. ✅ Test all endpoints with Postman
2. ⏭️ Connect React frontend
3. ⏭️ Test full MERN stack
4. ⏭️ Deploy to production

---

**Happy Testing! 🎉**
