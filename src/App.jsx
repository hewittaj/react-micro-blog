import { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App() {
  // Can't output booleans or objects

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
            <Route path='*' element={<NotFound/>}>
            </Route>
          </Routes>
          <Routes>
              {
              // Must be at bottom
              }
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
