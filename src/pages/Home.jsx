import React, { useRef } from 'react'
import Hero from '../components/sections/Hero'
import Skills from '../components/sections/Skills'
import "../App.css"
import Experince from '../components/sections/Experince'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

function Home() {
  const skillsRef = useRef();
  const experinceRef = useRef()
  return (
    <div className='w-screen flex flex-col items-center'>
      <Hero skillsRef={skillsRef} experinceRef={experinceRef} />
      <Skills ref={skillsRef} />
      <Experince ref={experinceRef} />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
