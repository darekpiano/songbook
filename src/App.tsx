import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Placeholder components - will be implemented later
const SongList = () => <div>Song List</div>
const SongView = () => <div>Song View</div>

function App() {
  return (
    <Router basename="/songbook">
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/song/:id" element={<SongView />} />
      </Routes>
    </Router>
  )
}

export default App
