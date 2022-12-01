import './TaskItem.scss'
import { RiDeleteBinLine } from 'react-icons/ri'

const TaskItem = ({ task, label }) => {
  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? 'checkbox-container-completed'
              : 'checkbox-container'
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
          ></span>
        </label>
      </div>

      <div className="delete">
        <RiDeleteBinLine size="29px" color="#C92C2C" />
      </div>
    </div>
  )
}

export default TaskItem
