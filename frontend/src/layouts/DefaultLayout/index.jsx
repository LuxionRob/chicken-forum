import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const DefaultLayout = () => {
  return (
    <div className='default-layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout
