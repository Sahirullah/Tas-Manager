import './TaskFilter.css'

function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'All Tasks', icon: '📋' },
    { value: 'pending', label: 'Pending', icon: '⏳' },
    { value: 'completed', label: 'Completed', icon: '✓' }
  ]

  return (
    <div className="task-filter">
      <p className="filter-label">Filter by status:</p>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={`filter-button ${currentFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}
            title={filter.label}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-text">{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TaskFilter
