import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col w-full items-center'>
      <Header/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App
