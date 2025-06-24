import { useState } from 'react'
import useLocalStorage from '/src/hooks/useLocalStorage.jsx';


import Button from '../components/Button'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <div className="max-w-xl mx-auto px-4 py-6 md:py-10">
      <h1 className="text-3xl font-bold mb-6 transition-colors">Task Manager</h1>
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded dark:bg-gray-800 dark:text-white"
          placeholder="Add a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {['All', 'Active', 'Completed'].map((type) => (
          <Button
            key={type}
            variant={filter === type ? 'primary' : 'secondary'}
            onClick={() => setFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>
      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-md transition-transform hover:scale-[1.01]"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer flex-grow ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'dark:text-white'}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskManager