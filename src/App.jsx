import React from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/Footer'

import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App