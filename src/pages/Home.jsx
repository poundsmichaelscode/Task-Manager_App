import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Welcome to PLP Task Manager</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-2">
            A simple React app that demonstrates state management, API integration, and Tailwind styling.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Interactive Counter</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Use the buttons to increment or decrement the counter.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/tasks"
            className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-4 rounded-lg shadow-md transition duration-200"
          >
            Go to Task Manager
          </Link>

          <Link
            to="/api"
            className="block bg-purple-500 hover:bg-purple-600 text-white text-center py-4 rounded-lg shadow-md transition duration-200"
          >
            View API Data
          </Link>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved. by OLAYENIKAN MICHAEL
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
