import { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './Create'

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  // Can't output booleans or objects

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
