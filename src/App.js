import React from 'react'
import Login from './auth/Login'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Admin, Product } from './pages'
import Layout from './layouts/Layout'
import { Navigation } from './components'
import RequireAuth from './auth/RequireAuth'

const App = () => {
  return (
    <>
    {/* Just for test for git */}
      <Navigation />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route element={<RequireAuth />}>
            <Route path='/admin' element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App