import axios from 'axios'
import { useState } from 'react'

const Task = () => {
  const [task, setTasks] = useState([
    {
      id: '1',
      description: 'Ir na acad',
      isCompleted: true,
    },
    {
        id: '2',
        description: 'prog',
        isCompleted: false,
      },
  ])

  const fetchTasks = async () => {
    try {
      const response = axios.get(
        'https://fsc-task-manager-backend.herokuapp.com/tasks',
      )
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        {task.map((tasks) =>)}
      </div>
    </>
  )
}

export default Task
