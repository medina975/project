import React from 'react'
import Head from '../components/Head'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Head/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout