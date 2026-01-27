import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add a new task
  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    }
    setTasks([newTask, ...tasks])
  }

  // Update a task
  const updateTask = (id, updatedTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: updatedTitle } : task
    ))
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle task completion status
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
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
      </div>
    </div>
  )
}

export default App
