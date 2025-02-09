import React from 'react'
import Header from './components/layout/header'

import { Outlet } from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App