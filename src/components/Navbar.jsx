import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="flex items-center gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/tasks" className="hover:underline">Tasks</a>
          <a href="/api" className="hover:underline">API</a>
          <button
            onClick={toggleTheme}
            className="bg-white text-blue-600 px-2 py-1 rounded transition-transform hover:scale-105"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar