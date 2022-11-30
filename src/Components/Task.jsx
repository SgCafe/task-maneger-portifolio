import axios from 'axios'
import { useEffect, useState } from 'react'

import TaskItem from './TaskItem'

import './Task.scss'

const Task = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  })

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        'https://fsc-task-manager-backend.herokuapp.com/tasks',
      )
      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="application">
        <h1>Gerenciador de Tarefas</h1>

        <div className="panel">
          <div className="task-container">
            <h2>Minhas tarefas</h2>
            <div className="box-task-noCompleted">
              <div className="tasks-list">
                {tasks
                  .filter((task) => task.isCompleted === false)
                  .map((lastTasks) => (
                    <p>{lastTasks.description}</p>
                  ))}
              </div>
            </div>
          </div>

          <div className="task-container">
            <h2>Tarefas concluídas</h2>
            <div className="box-task-completed">
              <div className="tasks-list">
                {tasks
                  .filter((task) => task.isCompleted === true)
                  .map((completedTasks) => (
                    <p>{completedTasks.description}</p>
                  ))}
              </div>
            </div>
          </div>

          <div className="pomodoro">
            <h3>Pomodoro</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task
