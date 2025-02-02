import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Footer></Footer>
     
    </div>
  )
}
