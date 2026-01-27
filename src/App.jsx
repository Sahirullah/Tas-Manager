import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import apiService from './services/api'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Load tasks from API on mount
  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await apiService.getTasks()
      setTasks(response.data || [])
    } catch (err) {
      setError('Failed to load tasks. Please make sure the server is running.')
      console.error('Error loading tasks:', err)
    } finally {
      setLoading(false)
    }
  }

  // Add a new task
  const addTask = async (taskTitle) => {
    try {
      setError('')
      const response = await apiService.createTask(taskTitle)
      if (response.success) {
        await loadTasks() // Reload to ensure consistency
      }
    } catch (err) {
      setError('Failed to create task. Please try again.')
      console.error('Error creating task:', err)
    }
  }

  // Update a task
  const updateTask = async (id, updatedTitle) => {
    try {
      setError('')
      const response = await apiService.updateTask(id, { title: updatedTitle })
      if (response.success) {
        await loadTasks() // Reload to ensure consistency
      }
    } catch (err) {
      setError('Failed to update task. Please try again.')
      console.error('Error updating task:', err)
    }
  }

  // Delete a task
  const deleteTask = async (id) => {
    try {
      setError('')
      const response = await apiService.deleteTask(id)
      if (response.success) {
        await loadTasks() // Reload to ensure consistency
      }
    } catch (err) {
      setError('Failed to delete task. Please try again.')
      console.error('Error deleting task:', err)
    }
  }

  // Toggle task completion status
  const toggleTaskCompletion = async (id) => {
    try {
      setError('')
      const response = await apiService.toggleTask(id)
      if (response.success) {
        // Reload all tasks from server to ensure consistency
        await loadTasks()
      }
    } catch (err) {
      setError('Failed to update task status. Please try again.')
      console.error('Error toggling task:', err)
    }
  }

  // Filter tasks based on status
  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed)
      case 'pending':
        return tasks.filter(task => !task.completed)
      default:
        return tasks
    }
  }

  const filteredTasks = getFilteredTasks()
  const completedCount = tasks.filter(task => task.completed).length
  const pendingCount = tasks.filter(task => !task.completed).length

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>📋 Task Manager</h1>
          <p className="app-subtitle">Organize your tasks efficiently</p>
        </header>

        {error && (
          <div className="error-banner">
            <p>{error}</p>
            <button onClick={loadTasks} className="retry-button">
              Retry
            </button>
          </div>
        )}

        <div className="app-stats">
          <div className="stat-card">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value">{tasks.length}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completed</span>
            <span className="stat-value completed">{completedCount}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Pending</span>
            <span className="stat-value pending">{pendingCount}</span>
          </div>
        </div>

        <TaskForm onAddTask={addTask} />

        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

        {loading ? (
          <div className="loading-state">
            <p>Loading tasks...</p>
          </div>
        ) : (
          <>
            <TaskList
              tasks={filteredTasks}
              onUpdateTask={updateTask}
              onDeleteTask={deleteTask}
              onToggleCompletion={toggleTaskCompletion}
            />

            {filteredTasks.length === 0 && (
              <div className="empty-state">
                <p className="empty-icon">✨</p>
                <p className="empty-message">
                  {tasks.length === 0
                    ? 'No tasks yet. Create one to get started!'
                    : 'No tasks match the current filter.'}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
