import React from 'react'
import Hero from '../Sections/Home/Hero'
import About from '../Sections/Home/About'
import Projects from '../Sections/Home/projects/Projects'
import Contact from '../Sections/Home/contact/Contact'

export default function Home() {
    return (
        <>
          <Hero /> 
          <About /> 
          <Projects /> 
          <Contact /> 
        </>
    )
}
