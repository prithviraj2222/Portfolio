import React from 'react'
import Navbar from '../sections/Navbar'
import { Outlet } from "react-router-dom";
import Footer from '../sections/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
