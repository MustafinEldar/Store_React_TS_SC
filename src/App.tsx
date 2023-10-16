import './App.css'
import { GamePagesDota2 } from './components/Pages/GamePages/GamePagesDota2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loading } from './components/Pages/SidebarPages/Loading'
import { Favourites } from './components/Pages/SidebarPages/Favourites'
import Content from './components/Pages/MainPages/Content/Content'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/dota2" element={<GamePagesDota2 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
