import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({ tasks, onUpdateTask, onDeleteTask, onToggleCompletion }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdate={onUpdateTask}
          onDelete={onDeleteTask}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  )
}

export default TaskList
