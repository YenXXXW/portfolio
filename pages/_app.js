import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
   <>
  <Head>
    <title>Wai&apos;s Portfolio</title>
    <meta name='description' content='portfolio website created by Wai'/>
    <link rel='icon' href='./w.jpg'></link>
  </Head> 
  <Navbar />
  <Component {...pageProps} />
  </> 
  )
  
  
}

export default MyApp
