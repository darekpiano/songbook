import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { SongList } from './components/songs/SongList'
import { SongDetail } from './components/songs/SongDetail'
import './App.css'

// Placeholder components - will be implemented later
const SongView = () => <div>Song View</div>

function App() {
  return (
    <Router basename="/songbook">
      <Layout>
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/songs/:id" element={<SongDetail />} />
          <Route path="/song/:id" element={<SongView />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
