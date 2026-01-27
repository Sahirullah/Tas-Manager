import { useState } from 'react'
import './TaskForm.css'

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!input.trim()) {
      setError('Please enter a task description')
      return
    }

    if (input.trim().length < 3) {
      setError('Task must be at least 3 characters long')
      return
    }

    // Add task
    onAddTask(input.trim())
    setInput('')
    setError('')
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
    if (error) setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className={`task-input ${error ? 'error' : ''}`}
          placeholder="Add a new task..."
          value={input}
          onChange={handleInputChange}
          maxLength="100"
        />
        <button type="submit" className="add-button">
          <span className="button-icon">+</span>
          <span className="button-text">Add Task</span>
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <p className="char-count">{input.length}/100</p>
    </form>
  )
}

export default TaskForm
