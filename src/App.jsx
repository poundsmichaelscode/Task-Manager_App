import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TaskManager from './pages/TaskManager'
import ApiViewer from './pages/ApiViewer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<TaskManager />} />
          <Route path="api" element={<ApiViewer />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App