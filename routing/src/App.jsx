import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import DevOps from './pages/DevOps'
import DSA from './pages/DSA'

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} >
          <Route path='/courses/DevOps' element={<DevOps />} />
          <Route path='/courses/DSA' element={<DSA />} />
        </Route >
      </Routes>

      <Footer />
    </div>
  )
}

export default App