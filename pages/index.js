import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState , useEffect } from 'react'
import Main from '../components/main'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {

  const [Bgblack,setBgblack] = useState(true)
  
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
