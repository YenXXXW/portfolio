import Image from 'next/image'
import Link from 'next/link'
import TESLA from '../public/projects/tesla.png'
import { RiRadioButtonFill } from 'react-icons/ri'

const Tesla = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]
                bg-black/80 z-10" />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={TESLA}/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%]
                translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2>Tesla</h2>
                    <h3>NextJS / TailWind CSS / Framer Motion </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
                <div className='col-span-4'>
                    <h4>Project</h4>
                    <h2>Overview</h2>
                    <div>
                        Used <span className='text-[#5651e5]'>NextJs</span> for faster performance and                         
                        better SEO.The page is responsive and the design is completed 
                        with <span className='text-[#5651e5]'>TailWind CSS</span>.With the help of <span className='text-[#5651e5]'>Framer Motion</span>, the visitors 
                        will see  fluent animations and the webpage is depolyed on
                        vercel.
                    </div>
                    <a
                        href='https://github.com/YenXXXW/tesla-tailwind'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://tesla-tailwind-igj8kppb5-yenxxxw.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>       
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2 '>
                        <p className='text-center font-bold pb-2'>Techonologies</p>
                            <div className='grid grid-cols-2 md:grid-cols-1'>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>NextJS</p>
                            
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>Framer Motion</p>
                            
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>TailWind CSS</p>
                            
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>Custom SVGs</p>
                            </div>
                                                
                    </div>
                </div>
            </div> 
            <Link href='/#projects'>
                <div className='flex justify-center mt-5 cursor-pointer'>
                    <p className='text-gray-500 text-md font-bold'>Back</p>
                </div> 
            </Link> 
             
            
        </div>
    );
}
 
export default Tesla;