import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default function HomePage() {
  return (
    <>
    <Navbar/>
      <Home/>
      <About/>
      <Main/>
      <Footer/>
    </>
  )
}
