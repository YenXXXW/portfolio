import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  
  const router= useRouter()
  
  
  useEffect(()=>{
    if(
      router.asPath === '/news' || router.asPath === '/tesla' 
    ){
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    }
    else{
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937') 
    }
  }) 

  useEffect(()=>{
    const handleShadow= () =>{
      if(window.scrollY >= 90){
        setShadow(true)
      }
    }
    window.addEventListener('scroll' , handleShadow)
  },[])
  

  return (
    <div style={{backgroundColor:`${navBg}`}}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-center items-center w-full h-full px-2 2xl:px-16'>
        
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li> */}
            <li className='mx-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick = {()=>setNav(true)}
            className='cursor-pointer md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 py-4 ease-in duration-500 grid justify-items-start'
            : 'fixed left-[-100%] top-0 ease-in duration-500 grid justify-items-start'
          }
        >
          <div >
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={'/logo.png'}
                    width='70'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'
                onClick={()=>setNav(false)}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] pb-2'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col '>
            <ul className='uppercase grid justify-items-start'>
              <Link href='/'>
                <li onClick={()=>setNav(false)} className='pb-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>            
          </div>
          <div className='pt-4 w-[80%]'>
                <p className='uppercase tracking-widest text-[#5651e5] mb-3'>Let&#39;s connect</p>
                <div className='flex justify-between '>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;