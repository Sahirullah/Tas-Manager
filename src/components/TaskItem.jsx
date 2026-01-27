import { useState } from 'react'
import './TaskItem.css'

function TaskItem({ task, onUpdate, onDelete, onToggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)

  const handleSaveEdit = () => {
    if (editValue.trim() && editValue !== task.title) {
      onUpdate(task.id, editValue.trim())
    }
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditValue(task.title)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit()
    } else if (e.key === 'Escape') {
      handleCancelEdit()
    }
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        
        {isEditing ? (
          <input
            type="text"
            className="task-edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            maxLength="100"
          />
        ) : (
          <span className="task-title">{task.title}</span>
        )}
        
        <span className="task-date">{task.createdAt}</span>
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              className="action-button save-button"
              onClick={handleSaveEdit}
              title="Save changes"
            >
              ✓
            </button>
            <button
              className="action-button cancel-button"
              onClick={handleCancelEdit}
              title="Cancel editing"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              className="action-button edit-button"
              onClick={() => setIsEditing(true)}
              title="Edit task"
            >
              ✎
            </button>
            <button
              className="action-button delete-button"
              onClick={() => onDelete(task.id)}
              title="Delete task"
            >
              🗑
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskItem
