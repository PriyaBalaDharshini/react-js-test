import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Movies from './pages/Movies'
import CompanyInfo from './pages/CompanyInfo'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/company-info' element={<CompanyInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App