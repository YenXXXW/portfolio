import Link from 'next/link';
import React from 'react';
import { AiOutlineMail ,AiOutlineLinkedin } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 mt-4'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Wai</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I&#39;m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] mx-auto mt-20 py-4'>
            <a
              href='https://www.linkedin.com/in/wai-yan-395369252/'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineLinkedin size='23' />
              </div>
            </a>
            <a
              href='https://github.com/YenXXXW?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub  size='22' />
              </div>
            </a>
            <a
              href='mailto:waiiiyannn56@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail  size='22'/>
              </div>
            </a>
            <a
              href='/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill  size='22'/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;