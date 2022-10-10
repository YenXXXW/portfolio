import { useState } from 'react'
import Main from '../components/main'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Head from 'next/head'

export default function Home() {
  
  return (
    <div>
      <Head>
      <title>Wai&apos;s Portfolio</title>
      <meta name='description' content='portfolio website created by Wai'/>
      <link rel='icon' href='/w.jpg' />
    </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
